import { Link } from "react-router-dom";

function VentasListado() {
    return (
        <>
            <div className="row"><h2 className="text-center">Ventas</h2></div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre del Cliente</th>
                            <th scope="col">Total</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Cliente1</td>
                            <td>10</td>
                            <td>
                                <Link to='/venta/1'>
                                    <button type="button" className="btn btn-success">Ver</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Cliente2</td>
                            <td>100</td>
                            <td>
                                <Link to='/venta/1'>
                                    <button type="button" className="btn btn-success">Ver</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Cliente3</td>
                            <td>1000</td>
                            <td>
                                <Link to='/venta/1'>
                                    <button type="button" className="btn btn-success">Ver</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default VentasListado;