import React, {useCallback, useRef} from 'react';
import { FiArrowLeft, FiMail,FiUser, FiLock } from 'react-icons/fi';
import { FormHandles} from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  //useCallback serve para não armazenar as funcoes dentro do componente envitando sua recriacao
  const handleSubmit = useCallback( async (data: object) => {
    try{
      formRef.current?.setErrors({}); //limpar os erros anteriores

      //define uma estrutura de validacao para os campos
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No minimo 6 digitos')
      });

      //forca a validacao que vai pro catch se estiver ruim
      await schema.validate(data, {
        abortEarly: false
      });
    } catch(err){
      console.log(err);
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  },[]);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Go Barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} type="password" name="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>

        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

      </Content>
    </Container>
  );
};
export default SignUp;
