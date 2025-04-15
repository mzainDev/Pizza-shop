import { configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice"
import CategorySlice from "./slices/CategorySlice"
import SearchSlice from "./slices/SearchSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
