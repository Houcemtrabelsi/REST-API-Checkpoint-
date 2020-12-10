import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
} from "../constantes/contacts";

const initialState = {
  contacts: [],
  loadContacts: false,
  
};
export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, errors: payload, loadContacts: false };

    default:
      return state;
  }
};
