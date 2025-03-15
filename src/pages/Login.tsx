import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  useIonToast
} from '@ionic/react';
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [present] = useIonToast();
  const history = useHistory();

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

  const handleEmailChange = (value: string | null | undefined) => {
    setEmail(value || '');
  };

  const handlePasswordChange = (value: string | null | undefined) => {
    setPassword(value || '');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      present({
        message: 'Veuillez remplir tous les champs',
        duration: 3000,
        color: 'warning'
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      present({
        message: 'Connexion réussie!',
        duration: 2000,
        color: 'success'
      });
      history.push('/introduction');
    } catch (error: any) {
      present({
        message: getErrorMessage(error),
        duration: 3000,
        color: 'danger'
      });
      console.error('Erreur de connexion:', error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="8" sizeLg="6" style={{ margin: 'auto' }}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle className="ion-text-center">
                    <h1>HYROX Training</h1>
                    <IonText color="medium">
                      <h2>Connexion</h2>
                    </IonText>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <form onSubmit={handleLogin}>
                    <IonItem>
                      <IonInput
                        type="email"
                        label="Email"
                        labelPlacement="floating"
                        value={email}
                        onIonInput={e => handleEmailChange(e.detail.value)}
                        required
                        clearInput
                      />
                    </IonItem>
                    <IonItem className="ion-margin-bottom">
                      <IonInput
                        type="password"
                        label="Mot de passe"
                        labelPlacement="floating"
                        value={password}
                        onIonInput={e => handlePasswordChange(e.detail.value)}
                        required
                        clearInput
                      />
                    </IonItem>
                    <IonButton expand="block" type="submit">
                      Se connecter
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login; 