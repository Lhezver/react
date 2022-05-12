import { Link } from "react-router-dom";

function FabricantesListado() {
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
            <tr>
              <th scope="row">1</th>
              <td>Proovedor1</td>
              <td>Dirección 1</td>
              <td>154469748</td>
              <td>proovedor1@gmail.com</td>
              <td>
                <button type="button" className="btn btn-warning">Editar</button>
                <button type="button" className="btn btn-danger">Borrar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Proovedor2</td>
              <td>Dirección 2</td>
              <td>154469748</td>
              <td>proovedor2@gmail.com</td>
              <td>
                <button type="button" className="btn btn-warning">Editar</button>
                <button type="button" className="btn btn-danger">Borrar</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Proovedor3</td>
              <td>Dirección 3</td>
              <td>154469748</td>
              <td>proovedor3@gmail.com</td>
              <td>
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
  
  export default FabricantesListado;