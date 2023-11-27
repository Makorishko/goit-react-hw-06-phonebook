import { ContactForm } from './form/form';
import { Filter } from './filter';
import { ContactList } from './list/list';
import { Wrapper } from './wrapper-styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactItems, deleteContactItems } from '../redux/contactsSlice';
import { changeFilterParam } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.param);
  const dispatch = useDispatch();

  const addContact = newContact => {
    const isSame = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isSame) {
      return alert('This name already exist');
    }
    dispatch(addContactItems(newContact));
  };

  const changeFilter = evt => {
    dispatch(changeFilterParam(evt.target.value));
  };

  const deleteElementsOfList = contact => {
    dispatch(deleteContactItems(contact.id));
  };

  //   dispatch({
  //     type: 'deleteContactItems',
  //     payload: contact.id,
  //   });
  //

  const getFilteredList = () => {
    if (contacts.length) {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filters.toLowerCase())
      );
    } else {
      return [];
    }
  };

  const filteredList = getFilteredList();
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList
        contacts={filteredList}
        deleteElementsOfList={deleteElementsOfList}
      />
    </Wrapper>
  );
};
