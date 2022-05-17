import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FabricantesFormulario() {

  const navigate = useNavigate();

  const params = useParams();

  const subtituloH2 = useRef();
  const inputNombre = useRef();
  const inputDireccion = useRef();
  const inputTelefono = useRef();
  const inputContacto = useRef();
  const inputObservaciones = useRef();

  const [subtitulo, setSubtitulo] = useState('Crear Fabricante');
  const [textoBoton, setTextoBoton] = useState('Crear');

  const [fabricante, setFabricante] = useState({
    nombre: '',
    direccion: '',
    telefono: 0,
    contacto: '',
    observaciones: '',
    id: 0
  });

  const GuardarFabricante = () => {
    if (params.idFabricante) {
      axios.put(`http://localhost:8000/fabricantes/${params.idFabricante}`, {
        id: params.idFabricante,
        nombre: inputNombre.current.value,
        direccion: inputDireccion.current.value,
        telefono: inputTelefono.current.value,
        contacto: inputContacto.current.value,
        observaciones: inputObservaciones.current.value
      })
        .then(() => {
          navigate('/fabricantes');
        })
        .catch(error => alert(error))
    } else {
      axios.post('http://localhost:8000/fabricantes', {
        nombre: inputNombre.current.value,
        direccion: inputDireccion.current.value,
        telefono: inputTelefono.current.value,
        contacto: inputContacto.current.value,
        observaciones: inputObservaciones.current.value
      })
        .then(() => {
          navigate('/fabricantes');
        })
        .catch(error => alert(error))
    }
  }

  const ObtenerFabricante = () => {
    axios.get(`http://localhost:8000/fabricantes/${params.idFabricante}`)
      .then(response => {
        setFabricante(response.data);
        inputTelefono.current.value = response.data.telefono;
      })
      .catch(error => alert(error))
  }

  useEffect(() => {
    if (params.idFabricante) {
      setSubtitulo('Editar Fabricante');
      setTextoBoton('Editar');
      ObtenerFabricante()
    }
  }, [params.idFabricante])


  return (
    <>
      <div className="row">
        <h2 className="text-center" ref={subtituloH2}>{subtitulo}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="col-form-label">Nombre:</label>
            <input type="text" className="form-control" id="nombre" ref={inputNombre} defaultValue={fabricante.nombre}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="col-form-label">Dirección:</label>
            <input type="text" className="form-control" id="direccion" ref={inputDireccion} defaultValue={fabricante.direccion}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="col-form-label">Teléfono:</label>
            <input type="number" className="form-control" id="telefono" ref={inputTelefono} defaultValue={fabricante.telefono}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="contacto" className="col-form-label">Contacto:</label>
            <input type="text" className="form-control" id="contacto" ref={inputContacto} defaultValue={fabricante.contacto}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="observaciones" className="col-form-label">Observaciones:</label>
            <input type="text" className="form-control" id="observaciones" ref={inputObservaciones} defaultValue={fabricante.observaciones}></input>
          </div>
        </form>

      </div>
      <div className="row d-flex">
        <div className="col-4">
          <button type="button" className="btn btn-success" onClick={() => GuardarFabricante()}>{textoBoton}</button>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <Link to='/fabricantes'>
            <button type="button" className="btn btn-danger">Cancelar</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FabricantesFormulario;