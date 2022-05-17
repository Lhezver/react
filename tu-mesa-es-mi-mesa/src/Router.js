import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import MueblesListado from './componentes/Muebles/MueblesListado';
import MueblesFormulario from './componentes/Muebles/MueblesFormulario';
import FabricantesListado from './componentes/Fabricantes/FabricantesListado';
import FabricantesFormulario from './componentes/Fabricantes/FabricantesFormulario';
import PedidosListado from './componentes/Pedidos/PedidosListado';
import VentasListado from './componentes/Ventas/VentasListado';
import VentasDetalle from './componentes/Ventas/VentasDetalle';
import CategoriasListado from './componentes/Categorias/CategoriasListado';
import CategoriasFormulario from './componentes/Categorias/CategoriasFormulario';

const Router = () => {

    const [carrito, setCarrito] = useState(
        [
            {
                codigoPropio: 1,
                codigoDelFabricante: 1,
                numSerieAlfanumerico: 'a1',
                fecha: '12/05/2022',
                categoria: 'Mesa',
                subcategoria: 'Comedor',
                precio: 13000
            },
            {
                codigoPropio: 2,
                codigoDelFabricante: 1,
                numSerieAlfanumerico: 'a2',
                fecha: '12/05/2022',
                categoria: 'Silla',
                subcategoria: 'Jardin',
                precio: 7500
            }
        ]);
    return (
        <BrowserRouter>
            <div className='row'>
                <nav className="navbar navbar-dark bg-primary">

                <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/fabricantes'>Fabricantes</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/categorias'>Categorías</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/muebles'>Muebles</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/pedidos'>Pedidos</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/ventas'>Ventas</NavLink>
                </nav>
            </div>

            <Routes>
            <Route path='/fabricantes' element={<FabricantesListado />} />
                <Route path='/fabricante/nuevo' element={<FabricantesFormulario />} />
                <Route path='/fabricante/:idFabricante' element={<FabricantesFormulario />} />

                <Route path='/categorias' element={<CategoriasListado />} />
                <Route path='/categoria/nuevo' element={<CategoriasFormulario />} />
                <Route path='/categoria/:idCategoria' element={<CategoriasFormulario />} />

                <Route path='/muebles' element={<MueblesListado getCarrito={carrito} setCarrito={setCarrito} />} />
                <Route path='/mueble/nuevo' element={<MueblesFormulario />} />
                <Route path='/mueble/:idMueble' element={<MueblesFormulario />} />


                <Route path='/pedidos' element={<PedidosListado />} />

                <Route path='/ventas' element={<VentasListado />} />
                <Route path='/venta/:idVenta' element={<VentasDetalle />} />

                <Route path='/' element={<Navigate to='/muebles' />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;