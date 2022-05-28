import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PersonaShape {
  slug: string;
  data: any;
}

const initialState: PersonaShape = {
  slug: "personaSlice",
  data: {
    databus: {
      initted: false,
      initting: false,
      ready: false,
    },
    fingerprint: {},
    device: {},
    location: {},
    user: {
      uid: null,
    },
  },
};

export const personaSlice = createSlice({
  name: "persona",
  initialState,
  reducers: {
    setPersona: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.data = {
        ...state.data,
        [key]: value,
      };
    },
  },
});

export const { setPersona } = personaSlice.actions;

export default personaSlice.reducer;
