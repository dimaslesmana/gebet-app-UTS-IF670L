import React, { Fragment, useContext, useRef, useState } from 'react';
import {
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonCol,
  IonButton,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { close, male, female } from 'ionicons/icons';

import { User } from '../../types/interfaces';
import UsersContext from '../../context/users-context';
import Loading from '../Loading';
import Toast from '../Toast';
import ActionSheet from '../ActionSheet';

import styles from './TargetGebetanList.module.css';

const TargetGebetanList: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User>();
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastColor, setToastColor] = useState<'success' | 'secondary' | ''>('');
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const usersCtx = useContext(UsersContext);

  const clearToast = () => {
    setToastMessage('');
    setToastColor('');
  };

  const resetActionSheet = () => {
    setShowActionSheet(false);
  };

  const showLoading = () => {
    resetActionSheet();
    setLoading(true);
  }

  const deleteTargetGebetanHandler = () => {
    if (!selectedUser) return;

    usersCtx.deleteTargetGebetan(selectedUser.id);

    setToastColor('secondary');
    setToastMessage(`${selectedUser.name} bukan gebetan kamu lagi.`);

    setLoading(false);
  };

  const startDeleteTargetGebetanHandler = (userId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const user = usersCtx.listTargetGebetan.find((user) => user.id === userId);

    setSelectedUser(user);
    setShowActionSheet(true);
  };

  if (!usersCtx.listTargetGebetan.length) {
    return (
      <Fragment>
        <Toast color={toastColor} message={toastMessage} onDidDismiss={clearToast} />

        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <p>Anda belum punya target gebetan.</p>
              <IonButton fill="solid" color="secondary" routerLink="/">
                Cari Gebetan
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Loading isLoading={loading} onDidDismiss={deleteTargetGebetanHandler} />

      <Toast color={toastColor} message={toastMessage} onDidDismiss={clearToast} />

      <ActionSheet showActionSheet={showActionSheet} resetActionSheetHandler={resetActionSheet} functionHandler={showLoading} />

      <IonList className={styles.list}>
        {usersCtx.listTargetGebetan.map((user) => (
          <IonItemSliding key={user.id} ref={slidingOptionsRef} className={styles.item}>

            <IonItemOptions side="end">
              <IonItemOption color="secondary" onClick={startDeleteTargetGebetanHandler.bind(null, user.id)}>
                <IonIcon slot="icon-only" icon={close} />
              </IonItemOption>
            </IonItemOptions>

            <IonItem color="tertiary">
              <IonThumbnail slot="start">
                <IonImg src={user.photo} alt={`${user.name} Photo`} />
              </IonThumbnail>

              <IonLabel className={styles.label}>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                {user.gender === 'male' ? (
                  <p>
                    <IonIcon icon={male} color="primary" className={styles.genderIcon} />
                    &nbsp;Laki-laki
                  </p>
                ) : (
                  <p>
                    <IonIcon icon={female} color="danger" className={styles.genderIcon} />
                    &nbsp;Perempuan
                  </p>
                )}
              </IonLabel>
            </IonItem>
          </IonItemSliding>
        ))}
      </IonList>
    </Fragment>
  );
};

export default TargetGebetanList;
