import { Link } from "react-router-dom";

function VentasDetalle() {
    return (
        <>
        <div className="row">
            <h2 className="text-center">Factura Nº 1</h2>
            <p>Nombre del Cliente: Cliente1</p>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Mueble</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mueble1</td>
                            <td>1</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mueble2</td>
                            <td>1</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mueble3</td>
                            <td>1</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td></td>
                            <td>1110</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row d-flex justify-content-center mt-2">
        <div className="col-4 d-flex justify-content-center">
          <Link to='/ventas'>
            <button type="button" className="btn btn-primary">Volver</button>
          </Link>
        </div>
      </div>
        </>
    );
}

export default VentasDetalle;