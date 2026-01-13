import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Login from './pages/Login';
import Home from './pages/Home';
import Reservas from './pages/Reservas';
import MisSolicitudes from './pages/MisSolicitudes';
import Calendario from './pages/Calendario';
import Register from './pages/Register';
import SolicitarReserva  from './pages/SolicitarReserva';
import SolicitarReservaPaso2 from './pages/SolicitarReservaPaso2';
import SolicitarReservaPaso3 from './pages/SolicitarReservaPaso3';
import EditarSolicitud from './pages/EditarSolicitud';
import DetalleReserva from './pages/DetalleReserva';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* INICIO → LOGIN */}
        <Route exact path="/login">
          <Login />
        </Route>

        {/* HOME */}
        <Route exact path="/home">
          <Home />
        </Route>

        {/* REGISTER
        <Route exact path="/register">
          <Register />
        </Route> */}

        {/* REDIRECCIÓN INICIAL */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="/reservas">
        <Reservas />
        </Route>

        <Route exact path="/solicitar-reserva">
        <SolicitarReserva />
        </Route>
        
        <Route path="/solicitar-reserva/paso2" component={SolicitarReservaPaso2} exact />

        <Route
        path="/solicitar-reserva/paso3"
        component={SolicitarReservaPaso3}
        exact
         />

         <Route
          path="/mis-solicitudes/:id/editar"
          component={EditarSolicitud}
          exact
        />

        <Route exact path="/mis-solicitudes/:id" component={DetalleReserva} />


        <Route exact path="/mis-solicitudes">
        <MisSolicitudes />
        </Route>

        <Route exact path="/calendario">
        <Calendario />
         </Route>



      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

