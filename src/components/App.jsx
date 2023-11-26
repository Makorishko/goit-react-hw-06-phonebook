import { ContactForm } from './form/form';
import { Filter } from './filter';
import { useEffect } from 'react';
import { ContactList } from './list/list';
import { Wrapper } from './wrapper-styled';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isSame = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isSame) {
      return alert('This name already exist');
    }

    dispatch({
      type: 'contact/adding',
      payload: newContact,
    });
  };

  const changeFilter = evt => {
    dispatch({
      type: 'filter/change',
      payload: evt.target.value,
    });
  };

  const deleteElementsOfList = contact => {
    dispatch({
      type: 'contact/delete',
      payload: contact.id,
    });
  };

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
