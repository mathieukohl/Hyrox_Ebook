import { useEffect, useState } from 'react';
import { IonToast } from '@ionic/react';

function ReloadPrompt() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Check for updates every hour
    const interval = setInterval(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          registration.update();
        });
      }
    }, 60 * 60 * 1000);

    // Listen for new service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setShowToast(true);
      });
    }

    return () => clearInterval(interval);
  }, []);

  const update = () => {
    window.location.reload();
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
          handler: () => setShowToast(false)
        }
      ]}
    />
  );
}

export default ReloadPrompt; 