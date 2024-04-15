
import {selectContacts, selectFilter } from "../../redux/slice"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { useSelector } from "react-redux"


function ContactList(){

  const contactFilter = useSelector(selectFilter)
    const contacts = useSelector(selectContacts)
    
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(contactFilter.toLowerCase()))
    return (
        <ul className={css.list}>
            {filteredContacts.map(el => <Contact key={el.id} {...el}/>)}
        </ul>
    )
}

export default ContactList