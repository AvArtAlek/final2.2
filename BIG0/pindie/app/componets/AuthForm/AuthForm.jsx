import Styles from './AuthForm.module.css';
import { useEffect } from 'react';
import { authorize, setJWT } from '@/app/api/api-utils';
import { endpoints } from '@/app/api/config';
import { useState } from 'react';
import { isResponseOk } from '@/app/api/api-utils';
import { useContext } from 'react';
import { useStore } from '@/app/store/app-store';

/* Надо добавить props */
export const AuthForm = (props) => {
  const authContext = useStore();
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState({ status: null, text: null });
  const handleInput = (e) => {
  setAuthData({ ...authData, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  const userData = await authorize(endpoints.auth, authData);
  if(isResponseOk(userData)) {
    authContext.login({...userData, id: userData._id}, userData.jwt); // login из контекста
    setMessage({ status: "success", text: "Вы авторизовались!" });
  } else {
    setMessage({ status: "error", text: "Неверные почта или пароль" });
  }
};
useEffect(() => {
  let timer; 
  if(authContext.user) { // Данные о user из контекста
    timer = setTimeout(() => {
      setMessage({ status: null, text: null});
      props.close();
    }, 1000);
  }
  return () => clearTimeout(timer);
}, [authContext.user]); // Данные о user из контекста
  return (
    <form onSubmit={handleSubmit} className={Styles["form"]}>      
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input
            onInput={handleInput}
            className={Styles["form__field-input"]}
            name="email"
            type="email"
            placeholder="hello@world.com"
          />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input className={Styles['form__field-input']} onInput={handleInput} type="password" name ="password" placeholder='***********'/>
        </label>
      </div>
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Войти</button>
      </div>
      {message.status && (
    <p className={Styles["form__message"]}>{message.text}</p>
)}
    </form>
  ) 
};
