import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MueblesFormulario() {
  const navigate = useNavigate();

  const params = useParams();

  const subtituloH2 = useRef();
  const inputNroSerie = useRef();
  const inputFecha = useRef();
  const inputPrecio = useRef();
  const inputIdFabricante = useRef();
  const inputIdCategoria = useRef();

  const [subtitulo, setSubtitulo] = useState('Crear Mueble');
  const [textoBoton, setTextoBoton] = useState('Crear');

  const [mueble, setMueble] = useState({
    nro_serie: '',
    id_categoria: 0,
    fecha_fabricacion: '',
    precio: 0,
    disponible: 0,
    id_fabricante: 0
  });

  const GuardarMueble = () => {
    if (params.idMueble) {
      axios.put(`http://localhost:8000/muebles/${params.idMueble}`, {
        nro_serie: params.idMueble,
        id_categoria: inputIdCategoria.current.value,
        fecha_fabricacion: inputFecha.current.value,
        precio: inputPrecio.current.value,
        disponible: 0,
        id_fabricante: inputIdFabricante.current.value
      })
        .then(() => {
          navigate('/muebles');
        })
        .catch(error => alert(error))
    } else {
      axios.post('http://localhost:8000/muebles', {
        nro_serie: inputNroSerie.current.value,
        id_categoria: inputIdCategoria.current.value,
        fecha_fabricacion: inputFecha.current.value,
        precio: inputPrecio.current.value,
        disponible: 0,
        id_fabricante: inputIdFabricante.current.value
      })
        .then(() => {
          navigate('/muebles');
        })
        .catch(error => alert(error))
    }
  }

  const ObtenerMueble = () => {
    axios.get(`http://localhost:8000/muebles/${params.idMueble}`)
      .then(response => {
        setMueble(response.data);
        inputIdCategoria.current.value = response.data.id_categoria;
        inputIdFabricante.current.value = response.data.id_fabricante;
        inputPrecio.current.value = response.data.precio;
        console.log(response.data);
      })
      .catch(error => alert(error))
  }

  useEffect(() => {
    if (params.idMueble) {
      setSubtitulo('Editar Mueble');
      setTextoBoton('Editar');
      ObtenerMueble()
    }
  }, [params.idMueble])


  return (
    <>
      <div className="row">
        <h2 className="text-center" ref={subtituloH2}>{subtitulo}</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="nroserie" className="col-form-label">Nro de Serie:</label>
            <input type="text" className="form-control" id="nroserie" ref={inputNroSerie} defaultValue={mueble.nro_serie}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="categoria" className="col-form-label">Categoría:</label>
            <input type="text" className="form-control" id="categoria" ref={inputIdCategoria} defaultValue={mueble.id_categoria}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="col-form-label">Fecha:</label>
            <input type="date" className="form-control" id="fecha" ref={inputFecha} defaultValue={mueble.fecha_fabricacion}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fabricante" className="col-form-label">Fabricante:</label>
            <input type="text" className="form-control" id="fabricante" ref={inputIdFabricante} defaultValue={mueble.id_fabricante}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="col-form-label">Precio:</label>
            <input type="number" className="form-control" id="precio" ref={inputPrecio} defaultValue={mueble.precio}></input>
          </div>
        </form>

      </div>
      <div className="row d-flex">
        <div className="col-4">
          <button type="button" className="btn btn-success" onClick={() => GuardarMueble()}>{textoBoton}</button>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <Link to='/muebles'>
            <button type="button" className="btn btn-danger">Cancelar</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MueblesFormulario;