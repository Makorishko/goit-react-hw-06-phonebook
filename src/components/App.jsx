import { ContactForm } from './form/form';
import { Filter } from './filter';
import { ContactList } from './list/list';
import { Wrapper } from './wrapper-styled';

export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
