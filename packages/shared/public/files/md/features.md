## Redux

```bash
npx create-react-app cra-redux-toolkit --template redux-typescript
```

The cra react/redux template uses a concept of features. This is to say that files pertaining to a particular concern are kept in a namespaced folder onder the features directory like this

[packages/demo-client/src/features/](https://bitbucket.org/chrisd-ll/demo/src/master/packages/demo-client/src/features/)

#### What's in a feature?

let's say we have a feature we're calling **bollix**, the bollix folder would contain some or all of these...

-   reducer
-   actions
-   pages
-   components

## Create Inpatients Feature

The inpatient feature has the following ACs;

-   A redux slice to manage inpatients
-   Route showing list of inpatients `/inpatients`
-   Route showing a single inpatient `/inpatients/{id}`

1. Open `/packages/demo-client/src/routes/routesData.tsx` and add the new routes
2. Create the Patients & Patient React Functional components to be rederered at that route
3. Add component to Routes.tsx
4. Create Slice
5. Add Slice to store `/packages/demo-client/src/app/store.tsx`
6. Add Button to Dashboard

```javascript
    {
      id: "b40066e0-6515-4e19-86a3-999369e7bbed",
      title: "Inpatient Browser",
      icon: "inpatients",
      route: "/inpatients",
      component: "Patients",
    },
    {
      id: "13355d54-09fb-4ab7-953d-82a19012b61c",
      title: "Single Inpatient",
      icon: "inpatients",
      route: "/patient/:id",
      component: "Patient",
      hideInNav: true,
    }
```
