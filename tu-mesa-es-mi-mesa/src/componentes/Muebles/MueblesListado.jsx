import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function MueblesListado(props) {
  let formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const [muebles, setMuebles] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [mueble, setMueble] = useState({
    nro_serie: '',
    precio: 0,
    id_fabricante: 0,
    id_categoria: 0,
    fecha_fabricacion: '',
    disponible: 0,
    categoria: {
      subcategoria: '',
      categoria: '',
      id: 0,
      cantidad: 0
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

  useEffect(() => {
    ObtenerMuebles()
  }, [])

  const ObtenerMuebles = () => {
    if (busqueda == '') {
      axios.get(`http://localhost:8000/muebles/`)
        .then((response) => {
          setMuebles(response.data);
        })
        .catch((e) => alert(e));
    }
    else {
      axios.get(`http://localhost:8000/paises/buscar/${busqueda}`)
        .then((response) => {
          setMuebles(response.data);
        })
        .catch((e) => alert(e));
    }
  }

  const SetearBorrar = (muebleId) => {
    axios.get(`http://localhost:8000/muebles/${muebleId}`)
      .then(response => {
        setMueble(response.data);
      })
      .catch(error => alert(error))
  }

  const EliminarMueble = () => {
    axios.delete(`http://localhost:8000/muebles/${mueble.nro_serie}`)
      .then(() => {
        ObtenerMuebles()
      })
      .catch(() => {
        alert('Hubo un error al eliminar el mueble')
      })
  }

  return (
    <>
      <div className="row d-flex justify-content-center mt-2">
        <div className="col-4 d-flex justify-content-center">
          <button type="button" className="btn btn-info">Carrito de Compra</button>
        </div>
      </div>

      <div className="row">

        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            muebles provistos por un mueble
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked></input>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            muebles que proveen un mueble
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            muebles en stock
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            muebles pedidos
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            muebles que llegan en una determinada fecha
          </label>
        </div>
        <div className="d-flex">
          <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-2">
        <div className="col-4 d-flex justify-content-center">
          <Link to='/mueble/nuevo'>
            <button type="button" className="btn btn-success">Nuevo Mueble</button>
          </Link>
        </div>
      </div>

      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Categoría</th>
              <th scope="col">Subcategoría</th>
              <th scope="col">Fabricante</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {muebles.map((mueble) => (
              <tr key={mueble.nro_serie}>
                <th scope="row">{mueble.nro_serie}</th>
                <td>{mueble.categoria.categoria}</td>
                <td>{mueble.categoria.subcategoria}</td>
                <td>{mueble.fabricante.nombre}</td>
                <td>{mueble.precio}</td>
                <td>
                  <Link to={'/mueble/' + mueble.nro_serie}>
                    <button type="button" className="btn btn-warning">Editar</button>
                  </Link>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar" onClick={() => SetearBorrar(mueble.nro_serie)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="ventaModal">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ventaModalLabel">Datos del Mueble</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <p>Número de serie alfanumérico: {mueble.nro_serie}</p>
                  <p>Categoría:{mueble.categoria.categoria}</p>
                  <p>Subcategoría: {mueble.categoria.subcategoria}</p>
                  <p>Fabricante: {mueble.fabricante.nombre}</p>
                  <p>Precio: {mueble.precio}</p>
                  <p>Fecha de fabricación: {mueble.fecha_fabricacion}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="cantidad" className="col-form-label">Cantidad:</label>
                  <input type="number" className="form-control" id="cantidad" defaultValue="0"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary">Vender</button>
            </div>
          </div>
        </div>
      </div>

      {/*Modal borrar*/}
      <div className="modal fade" id="modalBorrar">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalBorrarLabel">Eliminar Mueble</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
            <p>Número de serie alfanumérico: {mueble.nro_serie}</p>
                  <p>Categoría: {mueble.categoria.categoria}</p>
                  <p>Subcategoría: {mueble.categoria.subcategoria}</p>
                  <p>Fabricante: {mueble.fabricante.nombre}</p>
                  <p>Precio: {mueble.precio}</p>
                  <p>Fecha de fabricación: {mueble.fecha_fabricacion}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>EliminarMueble()}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>

      {props.getCarrito.map((item) => {
        console.log(item.categoria)
      })}
      {
        console.log('Ignorar lo que está abajo')
      }
    </>
  );
}

export default MueblesListado;