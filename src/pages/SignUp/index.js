import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/M.svg';
// import { Container } from './styles';
const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insia um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha é obrigatória'),
});
export default function SignUp() {
  return (
    <>
      <img src={logo} alt="MeatApp" />
      <Form schema={schema} onSubmit={() => {}}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha Secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
