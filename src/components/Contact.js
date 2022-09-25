// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <img src={data.photo} alt="" width={100} height={100} />
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
    </>
  );
};

export default Contact;
