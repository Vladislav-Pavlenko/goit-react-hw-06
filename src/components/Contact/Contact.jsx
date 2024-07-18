import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={css.contact}>
        <div className={css.contact_container}>
          <IoPerson />
          {name}
        </div>
        <div className={css.contact_container}>
          <FaPhone />
          {number}
        </div>
      </div>
      <button className={css.contact_btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
