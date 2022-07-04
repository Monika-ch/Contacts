import {
  CREATE_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "./contactList.actions";
import { CONTACTS } from "./shared/CONTACTS";

export const ContactListReducer = (
  state = { contactList: CONTACTS },
  action
) => {
  console.log(action);
  switch (action.type) {
    case CREATE_CONTACT:
      let newState = {
        ...state,
        contactList: state.contactList.concat(action.payload),
      };
      console.log(newState);
      return newState;
    case DELETE_CONTACT:
      return {
        ...state,
        contactList: state.contactList.filter(
          (x) => x.id !== action.payload.id
        ),
      };
    case EDIT_CONTACT:
      let newList = [];
      for (let i = 0; i < state.contactList.length; i++) {
        if (state.contactList[i].id === action.payload.id) {
          newList.push(action.payload);
        } else {
          newList.push(state.contactList[i]);
        }
      }
      return {
        ...state,
        contactList: newList,
      };
    default:
      return state;
  }
};
