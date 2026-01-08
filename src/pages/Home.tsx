import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory();

  const salir = () => {
    history.replace('/login');
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Bienvenido de nuevo</h2>

        <IonIcon icon={personCircleOutline} size="large" />

        <h3>USUARIO</h3>

        <IonButton onClick={() => history.push('/reservas')}>
        Reserva
        </IonButton>

        <IonButton routerLink="/mis-solicitudes" expand="block">
        Ver mis solicitudes
        </IonButton>


        <IonButton expand="block" color="danger" onClick={salir}>
          Salir
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
