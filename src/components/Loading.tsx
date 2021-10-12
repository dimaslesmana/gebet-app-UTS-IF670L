import React from 'react';
import { IonLoading } from '@ionic/react';

const Loading: React.FC<{
  isLoading: boolean,
  onDidDismiss: () => void,
}> = ({ isLoading, onDidDismiss }) => {

  return (
    <IonLoading isOpen={isLoading} onDidDismiss={onDidDismiss} spinner="circles" duration={1500} cssClass="loading" />
  );
};

export default Loading;
