import { IonicState } from "./ionic/ionic.model";
import { UserState } from "./user/user.model";

export interface RootState {
  ionic: IonicState;
  user: UserState;
}
