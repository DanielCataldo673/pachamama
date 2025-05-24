import React, { useState } from 'react';
import Animacion from './Animacion'

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    birthDate: '',
    email: '',
    telefono: '',
    city: 'c.a.b.a',
    conociste: [],
    pago: '',
    image: null,
    mensaje: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newConociste = checked
          ? [...prevData.conociste, value]
          : prevData.conociste.filter((v) => v !== value);
        return { ...prevData, conociste: newConociste };
      });
    } else if (type === 'radio') {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, image: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const validarCampos = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) nuevosErrores.nombre = 'Debe ingresar su nombre';
    if (!formData.apellido.trim()) nuevosErrores.apellido = 'Debe ingresar su apellido';
    if (!formData.birthDate) nuevosErrores.birthDate = 'Debe ingresar su fecha de nacimiento';
    if (!formData.email.trim()) nuevosErrores.email = 'Debe ingresar su email';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      nuevosErrores.email = 'Email inválido';
    if (!formData.telefono.trim()) nuevosErrores.telefono = 'Debe ingresar su teléfono';
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'Debe ingresar su consulta';

    return nuevosErrores;
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const validaciones = validarCampos();
    if (Object.keys(validaciones).length > 0) {
      setErrors(validaciones);
    } else {
      setErrors({});
      setShowModal(true);
      setTimeout(() => {
        setFormData({
          nombre: '',
          apellido: '',
          birthDate: '',
          email: '',
          telefono: '',
          city: 'c.a.b.a',
          conociste: [],
          pago: '',
          image: null,
          mensaje: ''
        });
      }, 300);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>


      {/* Formulario */}
      <div className="contac-3">
        <form className="principal" id="myForm" onSubmit={manejarEnvio}>
          <h2 className="contac-8">Te escuchamos.....</h2>
          <div className="grid-container-form">

            {/* Campo con mensaje de error */}
            {/* Nombre */}
            <div className="grid-item-form1">
              <br />
              <div className="contac-6">
                <label htmlFor="nombre">Nombre *</label><br />
                <input
                  className="firstname-2 requerido"
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre aquí....."
                  value={formData.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && <p style={{ color: 'white', margin: '5px 0', fontSize: '.8vw' }}>{errors.nombre}</p>}
              </div>
            </div>

            {/* Apellido */}
            <div className="grid-item-form2">
              <br />
              <div className="contac-6">
                <label htmlFor="apellido">Apellido *</label><br />
                <input
                  className="firstname-2 requerido"
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Ingrese su apellido aquí....."
                  value={formData.apellido}
                  onChange={handleChange}
                />
                {errors.apellido && <p style={{ color: 'white', margin: '5px 0', fontSize: '.8vw' }}>{errors.apellido}</p>}
              </div>
            </div>

            {/* Fecha de Nacimiento */}
            <div className="grid-item-form3">
              <br />
              <div className="contac-6">
                <label htmlFor="birthDate">Fecha de Nacimiento *</label><br />

                <input
                  className="firstname-2 requerido"
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
                {errors.birthDate && <p style={{ color: 'white', margin: '5px 0', fontSize: '.8vw' }}>{errors.birthDate}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="grid-item-form4">
              <br />
              <div className="contac-6">
                <label htmlFor="email">Email *</label><br />
                <input
                  className="firstname-2 requerido"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su email aquí....."
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'white', margin: '5px 0', fontSize: '.8vw' }}>{errors.email}</p>}
              </div>
            </div>

            {/* Teléfono */}
            <div className="grid-item-form5">
              <br />
              <div className="contac-6">
                <label htmlFor="telefono">Teléfono *</label><br />
                <input
                  className="firstname-2 requerido"
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingrese su teléfono aquí....."
                  value={formData.telefono}
                  onChange={handleChange}
                />
                {errors.telefono && <p style={{ color: 'white', margin: '5px 0', fontSize: '.8vw' }}>{errors.telefono}</p>}
              </div>
            </div>

            {/* Lugar de Residencia */}
            <div className="grid-item-form6">
              <br />
              <div className="contac-6">
                <label htmlFor="city">Lugar de Residencia</label><br />
                <select
                  className="firstname-2"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="c.a.b.a">C.A.B.A</option>
                  <option value="g.b.a">Gran Buenos Aires</option>
                  <option value="cordoba">Cordoba</option>
                  <option value="san-luis">San Luis</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>



            {/* Texto de consulta */}
            <div className="grid-item-form11">
              <div className="contac-6">
                <label htmlFor="mensaje">Escribe tu consulta *</label>
              </div>
              <div className="contac-10">
                <textarea
                  className="requerido"
                  name="mensaje"
                  id="mensaje"
                  cols="115"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>

              </div>
              {errors.mensaje && <p style={{ color: 'white', margin: '5px 0', fontSize: '1.2vw' }}>{errors.mensaje}</p>}
            </div>

            {/* Botones */}
            <div className="grid-item-form12">
              <div className="contac-13">
                {/* Enviar */}
                <button id="enviarForm" className="contac-14" type="submit">
                  Enviar
                </button>
                {/* Resetear */}
                <input
                  className="contac-14"
                  type="reset"
                  value="Borrar"
                  onClick={() => {
                    setFormData({
                      nombre: '',
                      apellido: '',
                      birthDate: '',
                      email: '',
                      telefono: '',
                      city: 'c.a.b.a',
                      conociste: [],
                      pago: '',
                      image: null,
                      mensaje: ''
                    });
                    setErrors({});
                  }}
                />
              </div>
            </div>

          </div>
        </form>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999
        }}>
          <div style={{
            background: 'rgb(129, 224, 137)', padding: '20px', borderRadius: '8px', maxWidth: '400px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center'
          }}>
            <h2 className="contac-6">Hemos recibido su consulta...</h2>
            <h2 className="contac-6">En breve nos estaremos comunicando...</h2>
            <h2 className="contac-6">Muchas gracias!!!

              <Animacion />
            </h2>

            <button onClick={closeModal} className='modalform'>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}