# Validating Complex types

## Lists

List validation now has experimental support via `handleList` method of the `ConstraintDirective` class.

Validate:

- Number of items in list
- Particular items allowed in list
- ...

- `includes` each list value must exactly match one of the `includes` items
- `excludes` none of list values may match any of the `excludes` items
- `matches` each list value must pass one of the matches constraints (such as `minLength: 3`)

Lists are defined as modifiers on other types. We should be able to at least validate lists of `String`, `Int` and `Float` for starters.

A schema definition like: `type: [User!]!` would result in:

`type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(User)))`

A scalar has a `parseValue` function which returns a `ValueNode` from a `Source`:

```ts
export type ValueNode =
  | VariableNode
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | NullValueNode
  | EnumValueNode
  | ListValueNode
  | ObjectValueNode;
```

As we can see, such a value can be a `ListValueNode`:

```ts
export interface ListValueNode {
  readonly kind: "ListValue";
  readonly loc?: Location;
  readonly values: ReadonlyArray<ValueNode>;
}
```

For an object return value

```ts
export interface ObjectValueNode {
  readonly kind: "ObjectValue";
  readonly loc?: Location;
  readonly fields: ReadonlyArray<ObjectFieldNode>;
}
```

with fields:

```ts
export interface ObjectFieldNode {
  readonly kind: "ObjectField";
  readonly loc?: Location;
  readonly name: NameNode;
  readonly value: ValueNode;
}
```

## Object

Validate:

- Two fields must have same value (password, confirmedPassword) ie. `same`
- When one field is set to sth, another field can only have specific set of values (ie. `when`)

We could use `yup` or `class-validator` for full object validation

When visiting an object, we could keep perhaps track of the fields contained within.
Then we continually check off each field being visited, setting parsed value on `fieldNameValueMap` . When all fields for the object have been "checked off", we call a callback to do full object validation on all parsed values collected.

### Example: Yup object validation

```js
visitInputObject(object) {
  const objValidator = createObjectValidator(object)
  this.stack.push(objValidator)
}

class ObjectValidator {
  constructor(object) {
    this.objTypeName = object.name;
    this.object = object
    const fields = object.getFields();
    this.fields = fields
    this.fieldNames = Object.keys(fields)
    this.fieldNameValueMap = {}
  }

  get shape() {
    return this.fieldNames.reduce((acc, name) => {
      const { field, fieldType, value } = this.fieldNameValueMap[name]
      const fieldSchema = yup[fieldType]()
      acc[name] = fieldSchema
      return acc
    }, {})
  }

  get schema() {
    return yup.object().shape(this.shape)
  }

  validate() {
    // validate all fields of object in fieldNameValueMap
    return this.schema.validate()
  }
}
```

For it to work "for real", we need to push each such validator on a stack so that each field uses the one at the top of the stack. Then when done validating, remove it from the stack...

Alternatively, use the `ObjectValueNode` when parsing values in scalars as described below.
Shouldn't have to be so complicated!
