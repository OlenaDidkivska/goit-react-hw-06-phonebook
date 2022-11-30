import { FilterField, FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice.';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = value => dispatch(filterContacts(value));

  return (
    <FilterField>
      <FilterLabel>Find contacts by name </FilterLabel>
      <FilterInput
        type="text"
        name="name"
        onChange={event => handleFilterChange(event.currentTarget.value.trim())}
      />
    </FilterField>
  );
};

export default Filter;