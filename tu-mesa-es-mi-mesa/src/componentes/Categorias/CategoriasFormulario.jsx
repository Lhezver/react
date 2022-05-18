import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoriasFormulario() {
    const navigate = useNavigate();

    const params = useParams();

    const subtituloH2 = useRef();
    const inputCategoria = useRef();
    const inputSubcategoria = useRef();

    const [subtitulo, setSubtitulo] = useState('Crear Categoría');
    const [textoBoton, setTextoBoton] = useState('Crear');

    const [categoria, setCategoria] = useState({
        id: 0,
        categoria: '',
        subcategoria: ''
    });

    const GuardarCategoria = () => {
        if (params.idCategoria) {
            axios.put(`http://localhost:8000/categorias/${params.idCategoria}`, {
                id: params.idCategoria,
                categoria: inputCategoria.current.value,
                subcategoria: inputSubcategoria.current.value
            })
                .then(() => {
                    navigate('/categorias');
                })
                .catch(error => alert(error))
        } else {
            axios.post('http://localhost:8000/categorias', {
                categoria: inputCategoria.current.value,
                subcategoria: inputSubcategoria.current.value
            })
                .then(() => {
                    navigate('/categorias');
                })
                .catch(error => alert(error))
        }
    }

    const ObtenerCategoria = () => {
        axios.get(`http://localhost:8000/categorias/${params.idCategoria}`)
            .then(response => {
                setCategoria(response.data);
            })
            .catch(error => alert(error))
    }

    useEffect(() => {
        if (params.idCategoria) {
            setSubtitulo('Editar Categoria');
            setTextoBoton('Editar');
            ObtenerCategoria()
        }
    }, [params.idCategoria])


    return (
        <>
            <div className="row">
                <h2 className="text-center" ref={subtituloH2}>{subtitulo}</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="categoria" className="col-form-label">Categoría:</label>
                        <input type="text" className="form-control" id="categoria" ref={inputCategoria} defaultValue={categoria.categoria}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subcategoria" className="col-form-label">Subcategoría:</label>
                        <input type="text" className="form-control" id="subcategoria" ref={inputSubcategoria} defaultValue={categoria.subcategoria}></input>
                    </div>
                </form>

            </div>
            <div className="row d-flex">
                <div className="col-4">
                    <button type="button" className="btn btn-success" onClick={() => GuardarCategoria()}>{textoBoton}</button>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <Link to='/categorias'>
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CategoriasFormulario;