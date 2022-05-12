function PedidosListado() {
    return (
        <>
            <div className="row"><h2 className="text-center">Pedidos</h2></div>
            <div className="row">
                <div className="d-flex">
                    <label for="habitantes" className="col-form-label">Muebles que llegan en una determinada fecha:</label>
                    <input type="date" className="form-control" id="habitantes"></input>
                <button type="button" className="btn btn-primary">Filtrar</button>
                </div>
            </div>

            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fabricante</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Fecha de Pedido</th>
                            <th scope="col">Fecha estimada de Arribo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Proovedor1</td>
                            <td>1</td>
                            <td>12/05/2022</td>
                            <td>13/05/2022</td>
                            <td>
                                <button type="button" className="btn btn-success">Recibido</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Proovedor2</td>
                            <td>2</td>
                            <td>12/05/2022</td>
                            <td>13/05/2022</td>
                            <td>
                                <button type="button" className="btn btn-success">Recibido</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Proovedor3</td>
                            <td>3</td>
                            <td>12/05/2022</td>
                            <td>13/05/2022</td>
                            <td>
                                <button type="button" className="btn btn-success">Recibido</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PedidosListado;