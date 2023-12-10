import { createSlice } from "@reduxjs/toolkit";

const DetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    userData: [],
  },
  reducers: {
    addData: (state, action) => {
      state.userData.push(action.payload);
    },
    removeData: (state, action) => {
      const indexToRemove = state.userData.findIndex(
        (user) => user.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.userData.splice(indexToRemove, 1);
      }
    },
    updateData: (state, action) => {
      const { id, updatedData } = action.payload;
      const userIndex = state.userData.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        state.userData[userIndex] = { ...state.userData[userIndex], ...updatedData };
      }
    },
    
  },
});

export const { addData, removeData, updateData } = DetailsSlice.actions;
export default DetailsSlice.reducer;
