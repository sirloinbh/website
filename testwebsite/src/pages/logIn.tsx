import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextComponent from '../components/logo';
import './logIn.css'

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/monitor'); // 
  };
  return (
    <div className="loginForm ">
      <img src='/MedInTech.png' alt="logo" />
      <TextComponent />
      <div className="inputWrapper"> 
        <div className="passwordLabel">Password</div>
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <button className="loginButton" onClick={handleLogin}>LogIn</button>
      </div>
      
    </div>
  );
};

export default LoginForm;