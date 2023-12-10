import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./todoSlice"
const appStore=configureStore({
    reducer: {
        userDetails: detailsReducer,
       
      },
});

export default appStore;