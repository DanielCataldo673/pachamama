import React from 'react';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Login.css'
import { Helmet } from 'react-helmet';

const Login = () => {


  const {email, setEmail,password, setPassword, handleSubmit,errors} = useAuth()

  


  return (
    <>
      <Helmet>
        <title>Login - PACHAMAMA</title>
      </Helmet>
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
              <label className='label' htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
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
              <label className='label' htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
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
                fontSize: '1.2vw',
                backgroundColor: 'rgb(129, 224, 137)',
                color: '#27391C',
                padding: '5px',
                border: '#27391C solid',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '35%',
                marginLeft: '33%',
                marginTop: '3%'
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
