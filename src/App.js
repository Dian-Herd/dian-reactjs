import { useState } from "react";
import FormInput from "./Components/FormInput";
import { Form, Button, Card } from 'react-bootstrap'
function App() {
  const[values, setValues] = useState({
    name : "",
    email : "",
    username : "",
    password : "",
    confirmPassword : ""
  })

  const inputs = [
    {
      id : 1,
      name : 'name',
      type : 'text',
      placeholder : 'Masukkan Nama',
      label : 'Nama',
      errorMessage : 'Nama tidak boleh kosong!',
      required : true
    },
    {
      id : 2,
      name : 'email',
      type : 'email',
      placeholder : 'Masukkan Email',
      label : 'Email',
      errorMessage : 'Email tidak valid',
      required : true
    },
    {
      id : 3,
      name : 'username',
      type : 'text',
      placeholder : 'Masukkan Nama Pengguna',
      label : 'Nama Pengguna',
      errorMessage : 'Nama pengguna harus terdiri dari 5 - 15 karakter dan tidak memiliki spesial karakter',
      pattern : '^[A-Za-z0-9]{5,15}$',
      required : true
    },
    {
      id : 4,
      name : 'password',
      type : 'password',
      placeholder : 'Masukkan Password',
      label : 'Password',
      errorMessage : 'Password terdiri dari lebih dari 8 karakter, minimal 1 kapital, 1 angka, 1 spesial karakter',
      pattern : '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$',
      required : true
    },
    {
      id : 5,
      name : 'confirmPassword',
      type : 'password',
      placeholder : 'Masukkan Kembali Password',
      label : 'Konfirmasi Password',
      errorMessage : 'Password tidak sesuai',
      pattern: values.password,
      required : true
    },
  ]

  const onChange = e => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Nama : ${values.name}
    Email : ${values.email}
    Nama Pengguna : ${values.username}
    Password : ${values.password}
    Konfirm Password : ${values.confirmPassword}`);
    setValues({
      name : "",
      email : "",
      username : "",
      password : "",
      confirmPassword : ""
    })
  }
  return (
    <div className="container">
      <Card style={{width: '23rem' , padding: '15px', margin: '100px auto'}}>
        <h1 className='text-center'>Register</h1>
        <Form onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <Button variant="dark" type="submit" style={{width: '100%'}} className='mt-3'>Submit</Button>
        </Form>
      </Card>      
    </div>
  );
}

export default App;
