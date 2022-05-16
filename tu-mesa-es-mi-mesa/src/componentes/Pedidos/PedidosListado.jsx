function PedidosListado() {
    return (
        <>
            <div className="row"><h2 className="text-center">Pedidos</h2></div>
            <div className="row">
                <div className="d-flex">
                    <label htmlFor="habitantes" className="col-form-label">Muebles que llegan en una determinada fecha:</label>
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
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalRecibido">Recibido</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Proovedor2</td>
                            <td>2</td>
                            <td>12/05/2022</td>
                            <td>13/05/2022</td>
                            <td>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalRecibido">Recibido</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Proovedor3</td>
                            <td>3</td>
                            <td>12/05/2022</td>
                            <td>13/05/2022</td>
                            <td>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalRecibido">Recibido</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/*Modal borrar*/}
    <div className="modal fade" id="modalRecibido">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalRecibidoLabel">Pedido realizado</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <p>¿Recibió el siguiente pedido?</p>
                    <p>idMueble: 1</p>
                    <p>idFabricante: 1</p>
                    <p>Cantidad: 1</p>
                    <p>Fecha del pedido: 12/05/2022</p>
                    <p>Fecha estimada de arribo: 13/05/2022</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary">Recibido</button>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default PedidosListado;