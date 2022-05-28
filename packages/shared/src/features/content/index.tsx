import { RootState } from "../../app/store";
import { setContent } from "./contentSlice";
import { contentAction } from "./actions/contentAction";

export const selectContent = (state: RootState) => state.content;

export { setContent, contentAction };
