import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import Filter from './Filter/Filter';

import { ContactsMassage, PhonebookContainer } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <PhonebookContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length > 0 ? (
        <>
          <Filter />
          <Contacts />
        </>
      ) : (
        <ContactsMassage>
          Your phonebook is empty, add your first contact
        </ContactsMassage>
      )}
    </PhonebookContainer>
  );
}
