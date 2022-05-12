import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import MueblesListado from './componentes/Muebles/MueblesListado';
import MueblesFormulario from './componentes/Muebles/MueblesFormulario';
import FabricantesListado from './componentes/Fabricantes/FabricantesListado';
import FabricantesFormulario from './componentes/Fabricantes/FabricantesFormulario';
import PedidosListado from './componentes/Pedidos/PedidosListado';
import VentasListado from './componentes/Ventas/VentasListado';
import VentasDetalle from './componentes/Ventas/VentasDetalle';

const Router = () => {
    return (
        <BrowserRouter>
            <div className='row'>
                <nav className="navbar navbar-dark bg-primary">

                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/muebles'>Muebles</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/fabricantes'>Fabricantes</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/pedidos'>Pedidos</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "nav-link text-white fw-bold" : "nav-link text-white")} to='/ventas'>Ventas</NavLink>
                </nav>
            </div>

            <Routes>
                <Route path='/muebles' element={<MueblesListado />} />
                <Route path='/mueble/nuevo' element={<MueblesFormulario />} />
                <Route path='/mueble/:idMueble' element={<MueblesFormulario />} />

                <Route path='/fabricantes' element={<FabricantesListado />} />
                <Route path='/fabricante/nuevo' element={<FabricantesFormulario />} />
                <Route path='/fabricante/:idFabricante' element={<FabricantesFormulario />} />

                <Route path='/pedidos' element={<PedidosListado />} />

                <Route path='/ventas' element={<VentasListado />} />
                <Route path='/venta/:idVenta' element={<VentasDetalle />} />

                <Route path='/' element={<Navigate to='/muebles' />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;