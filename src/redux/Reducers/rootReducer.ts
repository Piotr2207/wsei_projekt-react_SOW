import { combineReducers } from "redux";

import users, { IUserReducer } from "../Reducers/userReducer";
import photo, { IPhotoReducer } from "../Reducers/photoReducer";
import post, { IPostReducer } from "../Reducers/postReducer";
import comments, { ICommentReducer } from "../Reducers/commentReducer";

export default combineReducers({
  users,
  photo,
  post,
  comments,
});


