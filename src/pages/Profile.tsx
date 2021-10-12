import { IonContent, IonPage } from '@ionic/react';

import { Header } from '../components/Header';
import { Profile as MyProfile } from '../components/ProfileSection';

import styles from './Pages.module.css';

const Profile: React.FC = () => {
  return (
    <IonPage>

      <Header title="Profil" />

      <IonContent>
        <main className={styles.mainContainer}>
          <MyProfile />
        </main>
      </IonContent>

    </IonPage>
  );
};

export default Profile;
