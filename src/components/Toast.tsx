import React from 'react';
import { IonToast } from '@ionic/react';

const Toast: React.FC<{
  message: string,
  color: string,
  onDidDismiss: () => void,
}> = ({ message, color, onDidDismiss }) => {
  return (
    <IonToast
      isOpen={!!message && !!color}
      message={message}
      color={color}
      onDidDismiss={onDidDismiss}
      duration={1500}
    />
  );
};

export default Toast;
