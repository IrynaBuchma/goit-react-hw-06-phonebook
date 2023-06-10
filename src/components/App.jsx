import { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = ({ contacts }) => {
   
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);

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
const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
