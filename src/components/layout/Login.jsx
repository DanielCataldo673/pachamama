import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../styles/Login.css'


const Login = () => {


  const { setIsAuth } = useContext(CartContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = 'Email es requerido';
    if (!password) validationErrors.password = 'Password es requerido';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: 'Las credenciales son invalidas' });
      } else {
        console.log('User role:', foundUser.role);

        if (foundUser.role === 'admin') {
          setIsAuth(true);

          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setErrors({ email: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
    }
  };



  return (
    <>
    <div className='login'>
      <h1>Login</h1>
      <div className='fondo'>
        <form

          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '400px',
            margin: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Email address
            </label>
            <input
              id="formBasicEmail"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '0.5rem',
                border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                borderRadius: '0.25rem',
              }}
            />
            {errors.email && (
              <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.email}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Password
            </label>
            <input
              id="formBasicPassword"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: '0.5rem',
                border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                borderRadius: '0.25rem',
              }}
            />
            {errors.password && (
              <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              fontFamily: 'Saphira DEMO, sans-serif',
              fontSize: '1.7vw',
              backgroundColor: 'rgb(129, 224, 137)',
              color: '#27391C',
              padding: '0.75rem',
              border: '#27391C solid 2px',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
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
  )
}

export default Login
