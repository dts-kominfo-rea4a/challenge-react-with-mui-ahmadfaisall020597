import './App.css';
import { Container, Grid, Box } from '@mui/material';
import data from './data/contacts.json';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import { useState } from 'react';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(data);
  const contactElement = contacts.map((value) => <Contact key={value.name} data={value} />)

  return (
    <div className="App">
      <Container>
        <Header />

        <Grid container marginTop={10}>
          <Grid xs={6} item >
            <ContactForm onSubmitData={(newContact) => setContacts([...contacts, newContact])} />
          </Grid>
          <Grid xs={6} item>
            <Box sx={{
              padding: '1rem',
              backgroundColor: '#C6FFBA',
            }}>
              {contactElement}
            </Box>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
};

export default App;
