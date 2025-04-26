import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonList,
  IonAvatar,
  useIonToast
} from '@ionic/react';
import { logOutOutline, personOutline, mailOutline } from 'ionicons/icons';
import { 
  signOut,
  AuthError,
  sendPasswordResetEmail
} from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase/config';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [present] = useIonToast();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      present({
        message: 'Déconnexion réussie',
        duration: 2000,
        color: 'success'
      });
      history.push('/login');
    } catch (error) {
      present({
        message: 'Erreur lors de la déconnexion',
        duration: 3000,
        color: 'danger'
      });
    }
  };

  const handleResetPassword = async () => {
    const trimmedEmail = currentUser?.email;
    
    if (!trimmedEmail) {
      present({
        message: 'Un problème est survenu veuillez nous contacter par email',
        duration: 3000,
        color: 'warning'
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, trimmedEmail);
      present({
        message: 'Un email de réinitialisation a été envoyé',
        duration: 3000,
        color: 'success'
      });
    } catch (error: any) {
      present({
        message: getErrorMessage(error),
        duration: 3000,
        color: 'danger'
      });
      console.error('Erreur de réinitialisation:', error);
    }
  };

  const getErrorMessage = (error: AuthError) => {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Adresse email invalide';
      case 'auth/user-disabled':
        return 'Ce compte a été désactivé';
      case 'auth/user-not-found':
        return 'Aucun compte ne correspond à cette adresse email';
      case 'auth/wrong-password':
        return 'Mot de passe incorrect';
      case 'auth/too-many-requests':
        return 'Trop de tentatives de connexion. Veuillez réessayer plus tard';
      default:
        return 'Une erreur est survenue lors de la connexion';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ marginLeft: '30px' }}>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          padding: '20px'
        }}>
          <IonCard>
            <IonCardHeader className="ion-text-center">
              <IonAvatar style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 16px'
              }}>
                <IonIcon icon={personOutline} style={{ fontSize: '40px' }} />
              </IonAvatar>
              <IonCardTitle>Mon Profil</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='ion-margin-top'>
            <IonLabel>
                    <p>Votre email : {currentUser?.email}</p>
                  </IonLabel>

              <IonButton 
              className='ion-margin-top'
                      expand="block" 
                      fill="outline" 
                      onClick={handleResetPassword}
                    >
                      Réinitialiser le mot de passe
                    </IonButton>

              <IonButton 
              className='ion-margin-top'
                expand="block" 
                fill="outline"
                onClick={() => window.location.href = 'mailto:contact@m2-coaching.ch'}
              >
                <IonIcon slot="start" icon={mailOutline} />
                Nous contacter
              </IonButton>

              <IonButton 
                expand="block" 
                className="ion-margin-top"
                onClick={handleLogout}
              >
                <IonIcon slot="start" icon={logOutOutline} />
                Se déconnecter
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile; 