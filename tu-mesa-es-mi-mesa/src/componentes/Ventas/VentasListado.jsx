import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function VentasListado() {
    let formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
      });
    
    const [ventas, setVentas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [venta, setVenta] = useState({
        nro: 0,
        serie_mueble: '',
        dni: 0,
        nombre_cliente: '',
        mueble: {
            nro_serie: '',
            precio: 0,
            id_fabricante: 0,
            id_categoria: 0,
            fecha_fabricacion: '',
            disponible: 0,
            categoria: {
                categoria: '',
                id: 0,
                subcategoria: ''
            },
            fabricante: {
                nombre: '',
                direccion: '',
                contacto: '',
                telefono: 0,
                id: 0,
                observaciones: ''
            }
        }
    });

    useEffect(() => {
        ObtenerVentas()
    }, [])

    const ObtenerVentas = () => {
        if (busqueda == '') {
            axios.get(`http://localhost:8000/facturas/`)
                .then((response) => {
                    setVentas(response.data);
                })
                .catch((e) => alert(e));
        }
        else {
            axios.get(`http://localhost:8000/paises/buscar/${busqueda}`)
                .then((response) => {
                    setVentas(response.data);
                })
                .catch((e) => alert(e));
        }
    }

    const SetearVenta = (vendaId) => {
        axios.get(`http://localhost:8000/facturas/${vendaId}`)
            .then(response => {
                setVenta(response.data);
            })
            .catch(error => alert(error))
    }

    return (
        <>
            <div className="row"><h2 className="text-center">Ventas</h2></div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre del Cliente</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Total</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ventas.map((venta) => (
                            <tr key={venta.nro}>
                                <th scope="row">{venta.nro}</th>
                                <td>{venta.nombre_cliente}</td>
                                <td>{venta.dni}</td>
                                <td>{formatter.format(venta.mueble.precio)}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalVer" onClick={() => SetearVenta(venta.nro)}>Ver</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*Modal ver*/}
            <div className="modal fade" id="modalVer">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalVerLabel">Factura Nº: {venta.nro}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>Nombre Cliente: {venta.nombre_cliente}</p>
                            <p>Categoria: {venta.mueble.categoria.categoria}</p>
                            <p>Subcategoria: {venta.mueble.categoria.subcategoria}</p>
                            <p>Fabricante: {venta.mueble.fabricante.nombre}</p>
                            <p>Precio: {formatter.format(venta.mueble.precio)}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VentasListado;