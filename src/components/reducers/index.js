import {
  RECEIVE_API_DATA,
  CLICK_REQUEST_DATA,
  REQUEST_API_DATA,
  FILTERED_DATA,
} from "Components/actions";

//  function productReducer (state={}, {type, data, imageId}){
function productReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        response: action.response,
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        response: action.response,
      };
    case CLICK_REQUEST_DATA:
      return {
        ...state,
        params: action.params,
      };
    case FILTERED_DATA:
      return {
        ...state,
        filteredTitle: action.filteredTitle,
      };
    default:
      return state;
  }
}
export default productReducer;
