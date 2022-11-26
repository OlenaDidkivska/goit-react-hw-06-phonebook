import { ContactItem, ContactNumber, FilterButton } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            {contact.name}:{' '}
            <ContactNumber href={`tel:${contact.number}`}>
              {contact.number}
            </ContactNumber>{' '}
            <FilterButton type="button">Delete</FilterButton>
          </ContactItem>
        );
      })}
    </>
  );
};

Contacts.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
