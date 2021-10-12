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
} from '@ionic/react';
import { heart, male, female } from 'ionicons/icons';

import { User } from '../../types/interfaces';
import UsersContext from '../../context/users-context';
import Loading from '../Loading';
import Toast from '../Toast';

import styles from './CalonGebetanList.module.css';

const CalonGebetanList: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User>();
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastColor, setToastColor] = useState<'success' | 'secondary' | '' | string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const usersCtx = useContext(UsersContext);

  const clearToast = () => {
    setToastMessage('');
    setToastColor('');
  };

  const addTargetGebetanHandler = () => {
    if (!selectedUser) return;

    const isTargetExist = usersCtx.listTargetGebetan.find((user) => user.id === selectedUser.id);

    if (!isTargetExist) {
      usersCtx.addTargetGebetan(selectedUser);

      setToastColor('success');
      setToastMessage(`${selectedUser.name} berhasil ditambahkan.`);
    } else {
      setToastColor('warning');
      setToastMessage(`${selectedUser.name} sudah masuk target kamu. Cari yang lain ya!`);
    }

    setLoading(false);
  };

  const startAddTargetGebetanHandler = (userId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const user = usersCtx.listGebetan.find((user) => user.id === userId);

    setSelectedUser(user);
    setLoading(true);
  };

  return (
    <Fragment>
      <Loading isLoading={loading} onDidDismiss={addTargetGebetanHandler} />

      <Toast color={toastColor} message={toastMessage} onDidDismiss={clearToast} />

      <IonList className={styles.list}>
        {usersCtx.listGebetan.map((user) => (
          <IonItemSliding key={user.id} ref={slidingOptionsRef} className={styles.item}>

            <IonItemOptions side="end">
              <IonItemOption color="secondary" onClick={startAddTargetGebetanHandler.bind(null, user.id)}>
                <IonIcon slot="icon-only" icon={heart} />
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

export default CalonGebetanList;
