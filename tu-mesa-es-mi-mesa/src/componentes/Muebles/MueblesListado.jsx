import axios from "axios";
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function MueblesListado() {
  let formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const navigate = useNavigate();

  const [muebles, setMuebles] = useState([]);
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

  const inputFechaPedido = useRef();
  const inputFechaArribo = useRef();
  const inputCantidadPedido = useRef();

  const inputNombreCliente = useRef();
  const inputDNICliente = useRef();

  const inputFiltro = useRef();

  useEffect(() => {
    ObtenerMuebles()
  }, [])

  const ObtenerMuebles = () => {
    axios.get(`http://localhost:8000/muebles/`)
      .then((response) => {
        setMuebles(response.data);
      })
      .catch((e) => alert(e));
  }

  const SetearMueble = (muebleId) => {
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

  const PedirMueble = () => {
    axios.post(`http://localhost:8000/pedidos/`, {
      fecha: inputFechaPedido.current.value,
      fecha_arribo: inputFechaArribo.current.value,
      cantidad: inputCantidadPedido.current.value,
      id_categoria: mueble.categoria.id,
      id_fabricante: mueble.fabricante.id
    })
      .then(() => {
        navigate('/pedidos');
      })
      .catch(() => {
        alert('Hubo un error al pedir el mueble')
      })
  }

  const VenderMueble = () => {
    axios.post(`http://localhost:8000/facturas/`, {
      dni: inputDNICliente.current.value,
      nombre_cliente: inputNombreCliente.current.value,
      serie_mueble: mueble.nro_serie
    })
      .then(() => {
        navigate('/ventas');
      })
      .catch(() => {
        alert('Hubo un error al vender el mueble')
      })
  }

  const MueblesFabricantes = () => {
    axios.get(`http://localhost:8000/muebles/fabricantes/${inputFiltro.current.value}`)
      .then((response) => {
        setMuebles(response.data);
      })
      .catch((e) => alert(e));
  }

  const FabricantesMuebles = () => {
    axios.get(`http://localhost:8000/muebles/categorias/${inputFiltro.current.value}`)
      .then((response) => {
        setMuebles(response.data);
      })
      .catch((e) => alert(e));
  }

  return (
    <>
      <div className="row mt-2">
        <div className="d-flex">
          <input className="form-control me-1" type="search" placeholder="Filtro" aria-label="Search" ref={inputFiltro}></input>
          <button className="btn btn-outline-success" type="submit" onClick={()=>MueblesFabricantes()}>muebles provistos por un fabricante</button>
          <button className="btn btn-outline-success" type="submit" onClick={()=>FabricantesMuebles()}>fabricantes que proveen un mueble</button>
          <button className="btn btn-outline-success" type="submit" onClick={()=>ObtenerMuebles()}>Quitar filtros</button>
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
                  {mueble.disponible == 1 ?
                    <div>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ventaModal" onClick={() => SetearMueble(mueble.nro_serie)}>Vender</button>
                      <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#pedidoModal" onClick={() => SetearMueble(mueble.nro_serie)}>Pedir</button>
                      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar" onClick={() => SetearMueble(mueble.nro_serie)}>Borrar</button>
                    </div>
                    :
                    <div>
                      <button type="button" className="btn btn-primary disabled" data-bs-toggle="modal" data-bs-target="#ventaModal" onClick={() => SetearMueble(mueble.nro_serie)}>Vender</button>
                      <button type="button" className="btn btn-secondary disabled" data-bs-toggle="modal" data-bs-target="#pedidoModal" onClick={() => SetearMueble(mueble.nro_serie)}>Pedir</button>
                      <button type="button" className="btn btn-danger disabled" data-bs-toggle="modal" data-bs-target="#modalBorrar" onClick={() => SetearMueble(mueble.nro_serie)}>Borrar</button>
                    </div>
                  }
                  <Link to={mueble.disponible == 1 ? '/mueble/' + mueble.nro_serie : '#'}>
                    <button type="button" className={mueble.disponible == 1 ? "btn btn-warning" : "btn btn-warning disabled"}>Editar</button>
                  </Link>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Modal vender*/}
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
                  <p>Categoría:{mueble.categoria.categoria}</p>
                  <p>Subcategoría: {mueble.categoria.subcategoria}</p>
                  <p>Fabricante: {mueble.fabricante.nombre}</p>
                  <p>Precio: {mueble.precio}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="nombrecliente" className="col-form-label">Nombre del Cliente:</label>
                  <input type="text" className="form-control" id="nombrecliente" ref={inputNombreCliente}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="dnicliente" className="col-form-label">DNI del Cliente:</label>
                  <input type="number" className="form-control" id="dnicliente" ref={inputDNICliente} defaultValue="0"></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => VenderMueble()}>Vender</button>
            </div>
          </div>
        </div>
      </div>

      {/*Modal pedir*/}
      <div className="modal fade" id="pedidoModal">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pedidoModalLabel">Realizar pedido</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <p>Categoría:{mueble.categoria.categoria}</p>
                  <p>Subcategoría: {mueble.categoria.subcategoria}</p>
                  <p>Fabricante: {mueble.fabricante.nombre}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="fechapedido" className="col-form-label">Fecha de Pedido:</label>
                  <input type="date" className="form-control" id="fechapedido" ref={inputFechaPedido}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="fechaarribo" className="col-form-label">Fecha estimada de Arribo:</label>
                  <input type="date" className="form-control" id="fechaarribo" ref={inputFechaArribo}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="cantidad" className="col-form-label">Cantidad:</label>
                  <input type="number" className="form-control" id="cantidad" defaultValue="0" ref={inputCantidadPedido}></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => PedirMueble()}>Pedir</button>
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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => EliminarMueble()}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MueblesListado;