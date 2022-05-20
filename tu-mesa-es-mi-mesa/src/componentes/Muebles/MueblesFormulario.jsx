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
    fecha_fabricacion: '',
    id_categoria: 0,
    disponible: 0,
    nro_serie: '',
    precio: 0,
    id_fabricante: 0,
    categoria: {
      subcategoria: '',
      categoria: '',
      id: 1
    },
    fabricante: {
      nombre: '',
      direccion: '',
      contacto: '',
      telefono: 0,
      id: 0,
      observaciones: ''
    }
  });

  const [categorias, setCategorias] = useState([]);
  const [fabricantes, setFabricantes] = useState([]);

  const GuardarMueble = () => {
    if (params.idMueble) {
      axios.put(`http://localhost:8000/muebles/${params.idMueble}`, {
        nro_serie: params.idMueble,
        id_categoria: inputIdCategoria.current.value,
        fecha_fabricacion: inputFecha.current.value,
        precio: inputPrecio.current.value,
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
      })
      .catch(error => alert(error))
  }

  const ObtenerCategorias = () => {
    axios.get(`http://localhost:8000/categorias/`)
      .then(response => {
        setCategorias(response.data);
      })
      .catch(error => alert(error))
  }

  const ObtenerFabricantes = () => {
    axios.get(`http://localhost:8000/fabricantes/`)
      .then(response => {
        setFabricantes(response.data);
      })
      .catch(error => alert(error))
  }

  const { id_categoria, id_fabricante } = mueble;

  const formularioCambia = (targetEvent) => {
    setMueble({
      ...mueble,
      [targetEvent.name]: targetEvent.value,
    })
  }

  useEffect(() => {
    if (params.idMueble) {
      setSubtitulo('Editar Mueble');
      setTextoBoton('Editar');
      ObtenerMueble()
    }
  }, [params.idMueble])

  useEffect(() => {
    ObtenerCategorias();
    ObtenerFabricantes();
  }, [])


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
            <select className="form-select" aria-label="Default select example" id="categoria" name="id_categoria" ref={inputIdCategoria} value={id_categoria} onChange={(e) => formularioCambia(e.target)}>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.categoria}, {categoria.subcategoria}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="col-form-label">Fecha:</label>
            <input type="date" className="form-control" id="fecha" ref={inputFecha} defaultValue={mueble.fecha_fabricacion}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fabricante" className="col-form-label">Fabricante:</label>
            <select className="form-select" aria-label="Default select example" id="fabricante" name='id_fabricante' ref={inputIdFabricante} value={id_fabricante} onChange={(e) => formularioCambia(e.target)}>
              {fabricantes.map((fabricante) => (
                <option key={fabricante.id} value={fabricante.id}>{fabricante.nombre}</option>
              ))}
            </select>
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