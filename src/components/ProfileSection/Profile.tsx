import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import React from 'react';

import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="12" className="ion-text-center">
          <IonCard>
            <IonImg src="./assets/images/my_profile.jpg" alt="Dimas Lesmana" className={styles.profileImage} />

            <IonCardHeader>
              <IonCardTitle>Dimas Lesmana</IonCardTitle>
              <IonCardSubtitle>00000041281</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Profile;
