import { Link } from "react-router-dom";

function FabricantesFormulario() {
    return (
      <>
      <div className="row">
        <h2 className="text-center">Crear Fabricante</h2>
        <form>
          <div className="mb-3">
            <label for="nombre" className="col-form-label">Nombre:</label>
            <input type="text" className="form-control" id="nombre"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Dirección:</label>
            <input type="text" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Teléfono:</label>
            <input type="number" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Contacto:</label>
            <input type="text" className="form-control" id="habitantes"></input>
          </div>
          <div className="mb-3">
            <label for="habitantes" className="col-form-label">Observaciones:</label>
            <input type="text" className="form-control" id="habitantes"></input>
          </div>
        </form>

      </div>
      <div className="row d-flex">
        <div className="col-4"><button type="button" className="btn btn-success">Crear</button></div>
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