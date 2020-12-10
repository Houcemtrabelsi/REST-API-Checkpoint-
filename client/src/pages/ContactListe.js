import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../js/actions/Contact";
import Contact  from "./Contact";


function ContactListe() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactReducer.contacts);
  const loadContacts = useSelector(
    (state) => state.contactReducer.loadContacts
  );
console.log(contacts)
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
    {loadContacts?<h2>loading</h2>:contacts.map(el=><Contact contact={el}/>)}
    </div>
  );
}  

export default ContactListe;
