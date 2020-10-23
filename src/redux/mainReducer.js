import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn14159389Reducer from '../features/SignIn14159389/redux/reducers'
import SignUp15159388Reducer from '../features/SignUp15159388/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn14159389: SignIn14159389Reducer,
SignUp15159388: SignUp15159388Reducer,

});