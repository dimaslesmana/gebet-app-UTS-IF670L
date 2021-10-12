import { IonAvatar, IonButtons, IonHeader, IonImg, IonMenuButton, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';

import styles from './Header.module.css';

const Header: React.FC<{
  title: string,
}> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="tertiary">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>

        <IonTitle>{title}</IonTitle>

        <IonRouterLink slot="end" routerLink="/profile">
          <IonAvatar className={styles.avatar}>
            <IonImg src="./assets/images/my_profile.jpg" />
          </IonAvatar>
        </IonRouterLink>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
