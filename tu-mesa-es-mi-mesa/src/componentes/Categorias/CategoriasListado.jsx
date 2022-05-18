import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function CategoriasListado() {
    const [categorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [categoria, setCategoria] = useState({
        id: 0,
        categoria: '',
        subcategoria: ''
    });

    useEffect(() => {
        ObtenerCategorias()
    }, [])

    const ObtenerCategorias = () => {
        if (busqueda == '') {
            axios.get(`http://localhost:8000/categorias/`)
                .then((response) => {
                    setCategorias(response.data);
                })
                .catch((e) => alert(e));
        }
        else {
            axios.get(`http://localhost:8000/paises/buscar/${busqueda}`)
                .then((response) => {
                    setCategorias(response.data);
                })
                .catch((e) => alert(e));
        }
    }

    const SetearBorrar = (categoriaId) => {
        axios.get(`http://localhost:8000/categorias/${categoriaId}`)
            .then(response => {
                setCategoria(response.data);
            })
            .catch(error => alert(error))
    }

    const EliminarCategoria = () => {
        axios.delete(`http://localhost:8000/categorias/${categoria.id}`)
            .then(() => {
                ObtenerCategorias()
            })
            .catch(() => {
                alert('Hubo un error al eliminar la categoría')
            })
    }

    return (
        <>
            <div className="row d-flex justify-content-center mt-2">
                <div className="col-4 d-flex justify-content-center">
                    <Link to='/categoria/nuevo'>
                        <button type="button" className="btn btn-success">Nueva Categoría</button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Subcategoría</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <th scope="row">{categoria.id}</th>
                                <td>{categoria.categoria}</td>
                                <td>{categoria.subcategoria}</td>
                                <td>
                                    <Link to={'/categoria/' + categoria.id}>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar" onClick={() => SetearBorrar(categoria.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*Modal borrar*/}
            <div className="modal fade" id="modalBorrar">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalBorrarLabel">Eliminar Categoría</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Desea borrar la siguiente categoría?</p>
                            <p>ID: {categoria.id}</p>
                            <p>Categoria: {categoria.categoria}</p>
                            <p>Subcategoria: {categoria.subcategoria}</p>
                            <p>Cantidad: {categoria.cantidad}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => EliminarCategoria()}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CategoriasListado;