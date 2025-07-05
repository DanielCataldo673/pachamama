import React from 'react';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Login.css'; 
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth();

  return (
    <>
      <Helmet>
        <title>Login - PACHAMAMA</title>
      </Helmet>
      <div className='login'>
        <h1>Login</h1>
        <div className='fondo'>
          {/* El formulario ahora usa la clase 'login-form' */}
          <form onSubmit={handleSubmit} className='login-form'>
            {/* Este div usa la clase 'form-group' */}
            <div className='form-group'>
              {/* La etiqueta usa las clases 'label' y 'form-label' */}
              <label className='label form-label' htmlFor="formBasicEmail">
                Email address
              </label>
              <input
                id="formBasicEmail"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // La clase del input ahora es condicional según si hay error o no
                className={`form-input ${errors.email ? 'is-invalid' : 'is-valid'}`}
              />
              {errors.email && (
                // El div de error usa la clase 'error-message'
                <div className='error-message'>
                  {errors.email}
                </div>
              )}
            </div>

            {/* Este div usa la clase 'form-group' */}
            <div className='form-group'>
              {/* La etiqueta usa las clases 'label' y 'form-label' */}
              <label className='label form-label' htmlFor="formBasicPassword">
                Password
              </label>
              <input
                id="formBasicPassword"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // La clase del input ahora es condicional según si hay error o no
                className={`form-input ${errors.password ? 'is-invalid' : 'is-valid'}`}
              />
              {errors.password && (
                // El div de error usa la clase 'error-message'
                <div className='error-message'>
                  {errors.password}
                </div>
              )}
            </div>

            <button
              type="submit"
              className='myButton'
            >
              Submit
            </button>
          </form>
        </div>
      </div >
      <div className='marqueelogin'>
        <div>
          <span>Todos los derechos reservados - Pachamama - Copyright &copy; -2025 - Villa de las Rosas-Córdoba- Argentina </span>
        </div>
      </div>
    </>
  );
}

export default Login;