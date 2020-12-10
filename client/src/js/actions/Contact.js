import Axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  DELETE_CONTACTS,
} from "../constantes/contacts";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS });
  try {
    let result = await Axios.get("/api/contact");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error });
  }
};

export const deleteContact = () => (dispatch) => {
  Axios.delete('/api/contact/${id}')
  
};
