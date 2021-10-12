import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import { Header } from '../components/Header';
import { CalonGebetanList } from '../components/CalonGebetanSection';

import styles from './Pages.module.css';

const CalonGebetan: React.FC = () => {
  return (
    <IonPage>

      <Header title="Gebet App" />

      <IonContent>
        <main className={styles.mainContainer}>
          <CalonGebetanList />
        </main>
      </IonContent>

    </IonPage>
  );
};

export default CalonGebetan;
