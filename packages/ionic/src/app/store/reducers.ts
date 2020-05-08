import { ionicReducer } from "./ionic/ionic.reducer";
import { userReducer } from "./user/user.reducer";

const StoreReducers = {
  ionic: ionicReducer,
  user: userReducer,
};

export default StoreReducers;
