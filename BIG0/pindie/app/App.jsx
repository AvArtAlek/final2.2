'use client';

import { Header } from './componets/Header/Header';
import { Footer } from './componets/Fotter/Footer';

import { useEffect } from 'react';

import { useStore } from './store/app-store';

export const App = (props) => {
  /* Используем хук-хранилище */
  const store = useStore();

  useEffect(() => {
  /* 
    Проверяем, авторизован ли пользователь, 
    функцией checkAuth из хранилища 
  */
    store.checkAuth();
  }, []);

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) 
};