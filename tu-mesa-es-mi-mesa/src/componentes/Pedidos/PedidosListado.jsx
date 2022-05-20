import axios from "axios";
import { useEffect, useRef, useState } from "react";

function PedidosListado() {

    const inputFecha = useRef();

    const [pedidos, setPedidos] = useState([]);
    const [pedido, setPedido] = useState({
        fecha: '',
        fecha_arribo: '',
        estado: 0,
        id_fabricante: 0,
        nrop: 0,
        cantidad: 0,
        id_categoria: 0,
        fabricante: {
            contacto: '',
            direccion: '',
            nombre: '',
            id: 0,
            telefono: 0,
            observaciones: ''
        },
        categoria: {
            categoria: '',
            id: 0,
            subcategoria: ''
        }
    })

    const ObtenerPedidos = () => {
        axios.get(`http://localhost:8000/pedidos/`)
            .then((response) => {
                setPedidos(response.data);

            })
            .catch((e) => alert(e));
    }

    const ObtenerFiltro = () => {
        if (inputFecha.current.value != '') {
            axios.get(`http://localhost:8000/pedidos/search/${inputFecha.current.value}`)
                .then((response) => {
                    setPedidos(response.data);
                })
                .catch((e) => alert(e));
        }
    }



    const SetearPedido = (pedidoId) => {
        axios.get(`http://localhost:8000/pedidos/${pedidoId}`)
            .then(response => {
                setPedido(response.data);
            })
            .catch(error => alert(error))
    }

    const RecibirPedido = () => {
        axios.patch(`http://localhost:8000/pedidos/${pedido.nrop}`, {})
            .then(response => {
                ObtenerPedidos();
            })
            .catch(error => alert(error))
    }

    useEffect(() => {
        ObtenerPedidos()
    }, [])

    return (
        <>
            <div className="row"><h2 className="text-center">Pedidos</h2></div>
            <div className="row">
                <div className="d-flex form-check">
                    <label className="form-check-label" htmlFor="flexCheckDefault">Muebles que llegan en una determinada fecha:</label>
                    <input type="date" className="form-control" id="habitantes" ref={inputFecha}></input>
                    <button type="button" className="btn btn-primary" onClick={() => ObtenerFiltro()}>Filtrar</button>
                    <button type="button" className="btn btn-secondary" onClick={() => ObtenerPedidos()}>Desfiltrar</button>
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
                            <th scope="col">Cantidad</th>
                            <th scope="col">Fecha de Pedido</th>
                            <th scope="col">Fecha estimada de Arribo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((pedido) => (
                            <tr key={pedido.nrop}>
                                <th scope="row">{pedido.nrop}</th>
                                <td>{pedido.categoria.categoria}</td>
                                <td>{pedido.categoria.subcategoria}</td>
                                <td>{pedido.fabricante.nombre}</td>
                                <td>{pedido.cantidad}</td>
                                <td>{pedido.fecha}</td>
                                <td>{pedido.fecha_arribo}</td>
                                <td>
                                    {pedido.estado == 1 ?
                                        <button type="button" className="btn btn-success disabled" data-bs-toggle="modal" data-bs-target="#modalRecibido" onClick={() => SetearPedido(pedido.nrop)}>Recibido</button>
                                        : <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalRecibido" onClick={() => SetearPedido(pedido.nrop)}>Recibido</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*Modal recibido*/}
            <div className="modal fade" id="modalRecibido">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalRecibidoLabel">Pedido realizado</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Recibió el siguiente pedido?</p>
                            <p>Categoría: {pedido.categoria.categoria}</p>
                            <p>Subcategoría: {pedido.categoria.subcategoria}</p>
                            <p>Fabricante: {pedido.fabricante.nombre}</p>
                            <p>Cantidad: {pedido.cantidad}</p>
                            <p>Fecha del pedido: {pedido.fecha}</p>
                            <p>Fecha estimada de arribo: {pedido.fecha_arribo}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => RecibirPedido()}>Recibido</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PedidosListado;