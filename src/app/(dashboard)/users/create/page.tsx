'use client'

import useFetch from '@/hook/useFetch';
import IDriver from '@/interfaces/IDriver';
import { IUser } from '@/interfaces/IUser';
import FormDrivers from '@/sections/drivers/FormDrivers';
import FormUsers from '@/sections/users/FormUsers';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = () => {

  const router = useRouter();

  const inputOutputInit: IUser = {
    full_name: '',
    username: '',
    profile: '',
    password: '',
    active: true
  }

  const [isLoading, setIsLoading] = useState(false);
  const { response: drivers, loading, error, request } = useFetch<IDriver[]>('/api/users');


  const handleSubmit = async (values: any) => {
    try {
      await request('post', values);
      toast.success('Dados salvo com sucesso!', { theme: 'colored' });
      router.push('/users');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao salvar dados!', { theme: 'colored' });
    }
    setIsLoading(false);
  };

  return (
    <>
      <title>
        Cadastrar Usuários | CCES
      </title>
      <FormUsers handleSubmit={handleSubmit} typeText="Cadastrar" initialValues={inputOutputInit} />;
    </>
  )
};

export default CreateUser;