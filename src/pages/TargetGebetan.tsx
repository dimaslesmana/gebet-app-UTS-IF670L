import { IonContent, IonPage } from '@ionic/react';

import { Header } from '../components/Header';
import { TargetGebetanList } from '../components/TargetGebetanSection';

import styles from './Pages.module.css';

const TargetGebetan: React.FC = () => {
  return (
    <IonPage>

      <Header title="Target Gebetan" />

      <IonContent>
        <main className={styles.mainContainer}>
          <TargetGebetanList />
        </main>
      </IonContent>

    </IonPage>
  );
};

export default TargetGebetan;
