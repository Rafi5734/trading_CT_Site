import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userLoginSlice } from "../API/Users/userLoginSlice";
import { userDepositSlice } from "../API/Users/userDeposit/UserDepositSlice";
import { withdrawSlice } from "../API/Users/Withdraw/withdrawSlice";
import { botSlice } from "../API/Users/Bot/botSlice";
import { userMediaSlice } from "../API/Media/mediaSlice";
import { tradeSlice } from "../API/Users/Trade/tradeSlice";
// import { aiPlanSlice } from "../API/AiPlane/aiPlaneSlice";
// import { messageApiSlice } from "../API/Message/messageApiSlice";

export const store = configureStore({
  reducer: {
    [userLoginSlice.reducerPath]: userLoginSlice.reducer,
    [userDepositSlice.reducerPath]: userDepositSlice.reducer,
    [withdrawSlice.reducerPath]: withdrawSlice.reducer,
    [botSlice.reducerPath]: botSlice.reducer,
    [userMediaSlice.reducerPath]: userMediaSlice.reducer,
    [tradeSlice.reducerPath]: tradeSlice.reducer,
    // [aiPlanSlice.reducerPath]: aiPlanSlice.reducer,
    // [messageApiSlice.reducerPath]: messageApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userLoginSlice.middleware,
      userDepositSlice.middleware,
      withdrawSlice.middleware,
      botSlice.middleware,
      userMediaSlice.middleware,
      tradeSlice.middleware
      // aiPlanSlice.middleware,
      // messageApiSlice.middleware
    ),
});

setupListeners(store.dispatch);
