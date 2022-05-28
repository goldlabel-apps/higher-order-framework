import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import adminReducer from "../features/admin/adminSlice";
import coreReducer from "../features/core/coreSlice";
import personaReducer from "../features/persona/personaSlice";
import contentReducer from "../features/content/contentSlice";
import systemReducer from "../features/system/systemSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    core: coreReducer,
    content: contentReducer,
    persona: personaReducer,
    system: systemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
