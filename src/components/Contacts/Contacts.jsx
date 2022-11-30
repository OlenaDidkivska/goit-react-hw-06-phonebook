import { ContactItem, ContactNumber, FilterButton } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  console.log(filter);

  const visibleContacts = contacts?.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
    Notify.info('Сontact deleted successfully');
  };

  return (
    <ul>
      {visibleContacts?.map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}:{' '}
            <ContactNumber href={`tel:${contact.number}`}>
              {contact.number}
            </ContactNumber>{' '}
            <FilterButton
              type="button"
              onClick={() => deleteContactHandler(contact.id)}
            >
              Delete
            </FilterButton>
          </ContactItem>
        );
      })}
    </ul>
  );
};
