import React from 'react';
import { IonActionSheet } from '@ionic/react';
import { closeCircle, trash } from 'ionicons/icons';

const ActionSheet: React.FC<{
  showActionSheet: boolean,
  resetActionSheetHandler: () => void,
  functionHandler: () => void,
}> = ({ showActionSheet, resetActionSheetHandler, functionHandler }) => {
  return (
    <IonActionSheet
      isOpen={showActionSheet}
      header="Yakin gak gebet dia lagi?"
      onDidDismiss={resetActionSheetHandler}
      cssClass="actionSheet"
      buttons={[
        {
          text: 'Yakin, hapus dari daftar.',
          icon: trash,
          role: 'destructive',
          handler: functionHandler,
        },
        {
          text: 'Gak yakin, kembali.',
          icon: closeCircle,
          role: 'cancel',
          handler: resetActionSheetHandler,
        },
      ]}
    />
  );
};

export default ActionSheet;