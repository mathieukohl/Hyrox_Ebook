import { useRegisterSW } from 'virtual:pwa-register/react';
import { IonToast } from '@ionic/react';
import { useState } from 'react';

function ReloadPrompt() {
  const [showToast, setShowToast] = useState(false);
  
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      // Check for updates every hour
      setInterval(() => {
        registration?.update();
      }, 60 * 60 * 1000);
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
    onNeedRefresh() {
      setShowToast(true);
    },
  });

  const close = () => {
    setShowToast(false);
    setNeedRefresh(false);
  };

  const update = () => {
    updateServiceWorker(true);
    setShowToast(false);
  };

  return (
    <IonToast
      isOpen={showToast}
      message="Une nouvelle version est disponible"
      position="bottom"
      buttons={[
        {
          text: 'Mettre à jour',
          role: 'confirm',
          handler: update
        },
        {
          text: 'Plus tard',
          role: 'cancel',
          handler: close
        }
      ]}
    />
  );
}

export default ReloadPrompt; 