import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactsList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector((state) =>
    selectFilteredContacts(state, filter)
  );
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
