import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'HYROX Training' }) => {
  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle style={{ marginLeft: '30px' }}>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton fill='clear' style={{
              '--border-width': '0px',
              '--border-color': 'transparent',
              '--box-shadow': 'none',
              border: 'none',
              boxShadow: 'none'
            } as React.CSSProperties} onClick={() => history.push('/profile')}>
            <IonIcon slot="icon-only" icon={personOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;