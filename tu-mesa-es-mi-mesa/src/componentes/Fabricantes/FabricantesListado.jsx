import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function FabricantesListado() {

  const [fabricantes, setFabricantes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [fabricante, setFabricante] = useState({
    nombre: '',
    direccion: '',
    telefono: 0,
    contacto: '',
    observaciones: '',
    id: 0
  });

  useEffect(() => {
    ObtenerFabricantes()
  }, [])

  const ObtenerFabricantes = () => {
    if (busqueda == '') {
      axios.get(`http://localhost:8000/fabricantes/`)
        .then((response) => {
          setFabricantes(response.data);
        })
        .catch((e) => alert(e));
    }
    else {
      axios.get(`http://localhost:8000/paises/buscar/${busqueda}`)
        .then((response) => {
          setFabricantes(response.data);
        })
        .catch((e) => alert(e));
    }
  }

  const SetearBorrar = (fabricanteId) => {
    axios.get(`http://localhost:8000/fabricantes/${fabricanteId}`)
      .then(response => {
        setFabricante(response.data);
      })
      .catch(error => alert(error))
  }

  const EliminarFabricante = () => {
    axios.delete(`http://localhost:8000/fabricantes/${fabricante.id}`)
      .then(() => {
        ObtenerFabricantes()
      })
      .catch((e) => {
        alert(e.response.data.detail);
      })
  }

  return (
    <>
      <div className="row d-flex justify-content-center mt-2">
        <div className="col-4 d-flex justify-content-center">
          <Link to='/fabricante/nuevo'>
            <button type="button" className="btn btn-success">Nuevo Fabricante</button>
          </Link>
        </div>
      </div>

      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Contacto</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {fabricantes.map((fabricante) => (
              <tr key={fabricante.id}>
                <th scope="row">{fabricante.id}</th>
                <td>{fabricante.nombre}</td>
                <td>{fabricante.direccion}</td>
                <td>{fabricante.telefono}</td>
                <td>{fabricante.contacto}</td>
                <td>
                  <Link to={'/fabricante/' + fabricante.id}>
                    <button type="button" className="btn btn-warning">Editar</button>
                  </Link>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar" onClick={() => SetearBorrar(fabricante.id)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Modal borrar*/}
      <div className="modal fade" id="modalBorrar">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalBorrarLabel">Eliminar Fabricante</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>¿Desea borrar el siguiente fabricante?</p>
              <p>Nombre: {fabricante.nombre}</p>
              <p>Dirección: {fabricante.direccion}</p>
              <p>Teléfono: {fabricante.telefono}</p>
              <p>Contacto: {fabricante.contacto}</p>
              <p>Observación: {fabricante.observaciones}</p>
              <p>Nº del fabricante asignado automáticamente: {fabricante.id}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => EliminarFabricante()}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default FabricantesListado;