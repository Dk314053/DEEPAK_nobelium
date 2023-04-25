import { configureStore, createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "buttons",
  initialState: [],
  reducers: {
    addButtoncount: (state, action) => {
      const obj = action.payload;
      if (state.length == 0) {
        state.push(obj);
      }
      const existing = state.find((item) => item.char == obj.char);
      if (existing) {
        existing.char = obj.char;
        existing.count++;
      } else {
        state.push(obj);
      }
    },
  },
});

const store = configureStore({
  reducer: {
    buttons: buttonSlice.reducer,
  },
});

export { store, buttonSlice };