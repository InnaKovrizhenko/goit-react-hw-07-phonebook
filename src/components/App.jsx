import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'
import { Titleh1, Titleh2, Phonebook } from './App.styled'
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/services/fetchAPI';


export const App = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);


return (
  <Phonebook>
  <Titleh1>Phonebook</Titleh1>
  <ContactForm />
  <Titleh2>Contacts</Titleh2>
  <Filter />
  <ContactList />
  <ToastContainer autoClose={2000} />
</Phonebook>)
}

