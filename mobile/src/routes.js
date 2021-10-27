import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Index from './pages/Index';
import Especialidades from './pages/Especialidades';
import Medicos from './pages/Medicos';
import Clinicas from './pages/Clinicas';
import Usuario from './pages/Usuario'
import Notas from './pages/Notas'
import Faltas from './pages/Faltas'
import Protocolos from './pages/Protocolos'


const Routes = createAppContainer(
    createSwitchNavigator({
        Index,
        Login,
        Medicos,
        Usuario,
        Clinicas,
        Especialidades,
        Notas,
        Faltas,
        Protocolos
    })
)

export default Routes