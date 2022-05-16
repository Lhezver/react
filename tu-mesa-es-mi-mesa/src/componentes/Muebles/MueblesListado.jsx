import { Link } from "react-router-dom";

function MueblesListado(props) {
  let formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
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
            muebles provistos por un fabricante
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked></input>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            fabricantes que proveen un mueble
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
              <th scope="col">Cod. Fabricante</th>
              <th scope="col">Categoría</th>
              <th scope="col">Subcategoría</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>123</td>
              <td>Mesa</td>
              <td>Comedor</td>
              <td>{formatter.format(13000)}</td>
              <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ventaModal">Vender</button>
                <button type="button" className="btn btn-secondary">Pedir</button>
                <Link to='/mueble/1'>
                  <button type="button" className="btn btn-warning">Editar</button>
                </Link>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar">Borrar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>321</td>
              <td>Mesa</td>
              <td>Jardín</td>
              <td>{formatter.format(5999.99)}</td>
              <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ventaModal">Vender</button>
                <button type="button" className="btn btn-secondary">Pedir</button>
                <Link to='/mueble/2'>
                  <button type="button" className="btn btn-warning">Editar</button>
                </Link>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar">Borrar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>213</td>
              <td>Silla</td>
              <td>Metálica</td>
              <td>{formatter.format(7500.50)}</td>
              <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ventaModal">Vender</button>
                <button type="button" className="btn btn-secondary">Pedir</button>
                <Link to='/mueble/3'>
                  <button type="button" className="btn btn-warning">Editar</button>
                </Link>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar">Borrar</button>
              </td>
            </tr>
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
                  <p>Código propio: 1</p>
                  <p>Código del fabricante: 1</p>
                  <p>Número de serie alfanumérico: a1</p>
                  <p>Fecha de fabricación: 12/05/2022</p>
                  <p>Categoría: Mesa</p>
                  <p>Subcategoría: Comedor</p>
                  <p>Precio: 13000</p>
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
              <p>¿Desea borrar el siguiente mueble?</p>
              <p>Código propio: 1</p>
              <p>Código del fabricante: 1</p>
              <p>Nº de serie alfanumérico: a1</p>
              <p>Fecha de fabricación: 12/05/2022</p>
              <p>Categoría: Mesa</p>
              <p>Subcategoría: Comedor</p>
              <p>Precio: 13000</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary">Eliminar</button>
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