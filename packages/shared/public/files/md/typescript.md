## TypeScript

> Thanks MicroSoft, Yes, there are many great benefits, but you know what... if I'd wanted a typed language I'd have invented one not retrofitted one

#### Here's some good typin'

```javascript
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
```

#### Here's som bad typin'

```javascript
export default function Floating(props: any) {
```

Never use any. It makes you look weak. Can't we get a contractor to fill in the blanks?
