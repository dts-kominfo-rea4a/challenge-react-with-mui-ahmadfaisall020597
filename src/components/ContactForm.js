import { TextField, Stack, Box, Button } from '@mui/material';
import { useState } from 'react';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = (props) => {
  const { onSubmitData } = props;
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [nama, setNama] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const clickHandler = () => {
    const data = {
      name: nama,
      phone: phone,
      email: email,
      photo: url
    };

    onSubmitData(data);
  }

  return (
    <Box sx={{
      padding: '1rem',
      backgroundColor: '#FAFFDA',
    }}>
      <Stack spacing={3}>
        <TextField id="nama" label="Nama" variant="filled" onChange={(e) => setNama(e.target.value)} />
        <TextField id="phone" label="Phone" variant="filled" onChange={(e) => setPhone(e.target.value)} />
        <TextField id="email" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)} />
        <TextField id="url" label="Photo URL" variant="filled" onChange={(e) => setUrl(e.target.value)} />
        <div style={{ width: '100%', display: 'flex', alignItems: 'start' }}>
          <Button variant="text" onClick={clickHandler}>Add New</Button>
        </div>
      </Stack>
    </Box>
  );
}

export default ContactForm;