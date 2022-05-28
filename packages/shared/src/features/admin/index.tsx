import Admin from "./Admin";
import { RootState } from "../../app/store";
import { setAdmin } from "./adminSlice";
import { adminAction } from "./actions/adminAction";

export const selectAdmin = (state: RootState) => state.admin;
export { Admin, setAdmin, adminAction };
