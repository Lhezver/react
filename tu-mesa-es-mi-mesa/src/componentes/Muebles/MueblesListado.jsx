import { Link } from "react-router-dom";

function MueblesListado() {
  let formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  return (
    <>
      <div className="row d-flex justify-content-center mt-2">
        <div className="col-4 d-flex justify-content-center">
          <button type="button" class="btn btn-info">Carrito de Compra</button>
        </div>
      </div>

      <div className="row">

        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
          <label class="form-check-label" for="flexRadioDefault1">
            muebles provistos por un fabricante
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            fabricantes que proveen un mueble
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            muebles en stock
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            muebles pedidos
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
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
                <button type="button" className="btn btn-primary">Vender</button>
                <button type="button" className="btn btn-warning">Editar</button>
                <button type="button" className="btn btn-danger">Borrar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>321</td>
              <td>Mesa</td>
              <td>Jardín</td>
              <td>{formatter.format(5999.99)}</td>
              <td>
                <button type="button" className="btn btn-primary">Vender</button>
                <button type="button" className="btn btn-warning">Editar</button>
                <button type="button" className="btn btn-danger">Borrar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>213</td>
              <td>Silla</td>
              <td>Metálica</td>
              <td>{formatter.format(7500.50)}</td>
              <td>
                <button type="button" className="btn btn-primary">Vender</button>
                <button type="button" className="btn btn-warning">Editar</button>
                <button type="button" className="btn btn-danger">Borrar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MueblesListado;