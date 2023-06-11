import React from 'react';
import './LoginForm.css'

function LoginForm() {
  return (
    <div className='container'>
      <div className='login-form-container'>
        <div className='login-form-header'>
            <i className='key-icon'/>
            <h3>Авторизация</h3>
        </div>
        <div className='login-form-body'>
          <div className='input-icons'>
            <input type='email' placeholder='Email' className='input-field' id='email-icon' />
            <a><i className='email-icon'/></a>
          </div>
          <div className='input-icons'>
            <input type='password' placeholder='Пароль' className='input-field' id='lock-icon'/>
            <i className='lock-icon'></i>
          </div>
          <div className='input-icons'>
            <input type='submit' value='Войти'className='login-form-button input-field-button'/>
          </div>
        </div>
        <div className='login-form-footer'>
          <a className><b>Регистрация</b></a>
          <a className="footer-text">Забыли пароль?</a>
        </div>
      </div>
    </div>
  )
}

export default LoginForm