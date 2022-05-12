import { Link } from "react-router-dom";

function MueblesFormulario() {
  return (
    <>
      <div className="row">
        <h2 className="text-center">Crear Mueble</h2>
        <form>
          <div className="mb-3">
            <label for="nombre" className="col-form-label">Código propio:</label>
            <input type="text" className="form-control" id="nombre"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Código del fabricante:</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Nº de serie alfanumérico:</label>
            <input type="text" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Fecha de fabricación:</label>
            <input type="date" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Categoría:</label>
            <input type="text" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Subcategoría:</label>
            <input type="text" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Precio:</label>
            <input type="number" className="form-control" id="habitantes"></input>
          </div>
        </form>

      </div>
      <div className="row d-flex">
        <div className="col-4"><button type="button" className="btn btn-success">Crear</button></div>
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