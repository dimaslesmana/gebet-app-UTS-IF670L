import React from 'react';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react';
import { list, heart, person } from 'ionicons/icons';

const SideMenu: React.FC = () => {

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Gebet App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink="/">
              <IonIcon slot="start" icon={list} color="secondary" />
              <IonLabel>Daftar Calon Gebetan</IonLabel>
            </IonItem>
            <IonItem button routerLink="/target-gebetan">
              <IonIcon slot="start" icon={heart} color="secondary" />
              <IonLabel>Target Gebetan</IonLabel>
            </IonItem>
            <IonItem button routerLink="/profile">
              <IonIcon slot="start" icon={person} color="secondary" />
              <IonLabel>Profil</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
