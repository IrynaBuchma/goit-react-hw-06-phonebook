import Layout from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/phonebook/selectors';

const App = () => {
   const contacts = useSelector(getContacts)
  return (
    <Layout>
      <div className='section'>
        <h1>Phonebook</h1>
        <ContactForm/>
      </div>
      {contacts.length ? (
        <div className='section'>
          <h2>Contacts</h2>
          <Filter/>
          <ContactList/>
        </div>
      ) : null}
    </Layout>
  );
};

export default App;
