import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  useIonToast,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { auth } from '../firebase/config';
import { 
  sendPasswordResetEmail, 
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  const [newUserEmail, setNewUserEmail] = useState('');
  const [present] = useIonToast();
  const history = useHistory();

  useEffect(() => {
    // Check if current user is admin
    const checkAdmin = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser || currentUser.email !== 'adminhyrox@gmail.com') {
        history.replace('/introduction');
        present({
          message: 'Accès non autorisé',
          duration: 3000,
          color: 'danger'
        });
      }
    };

    checkAdmin();
  }, [history, present]);

  const handleCreateUser = async () => {
    const trimmedEmail = newUserEmail.trim();
    
    if (!trimmedEmail) {
      present({
        message: 'Veuillez entrer une adresse email',
        duration: 3000,
        color: 'warning'
      });
      return;
    }

    try {
      // Create user with a random password
      const tempPassword = Math.random().toString(36).slice(-8);
      await createUserWithEmailAndPassword(auth, trimmedEmail, tempPassword);
      
      // Send password reset email
      await sendPasswordResetEmail(auth, trimmedEmail);
      
      present({
        message: 'Utilisateur créé et email de réinitialisation envoyé',
        duration: 3000,
        color: 'success'
      });
      setNewUserEmail(''); // Clear the input after success
    } catch (error: any) {
      let errorMessage = 'Erreur lors de la création de l\'utilisateur';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Cette adresse email est déjà utilisée';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Adresse email invalide';
      }
      
      present({
        message: errorMessage,
        duration: 3000,
        color: 'danger'
      });
      console.error('Erreur:', error);
    }
  };

  const handleSendPasswordReset = async () => {
    const trimmedEmail = newUserEmail.trim();
    
    if (!trimmedEmail) {
      present({
        message: 'Veuillez entrer une adresse email',
        duration: 3000,
        color: 'warning'
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, trimmedEmail);
      present({
        message: 'Email de réinitialisation envoyé avec succès',
        duration: 3000,
        color: 'success'
      });
      setNewUserEmail(''); // Clear the input after success
    } catch (error: any) {
      let errorMessage = 'Erreur lors de l\'envoi de l\'email';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Aucun compte ne correspond à cette adresse email';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Adresse email invalide';
      }
      
      present({
        message: errorMessage,
        duration: 3000,
        color: 'danger'
      });
      console.error('Erreur:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Panel Administrateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="8" sizeLg="6" style={{ margin: 'auto' }}>
              <IonCard>
                <IonCardContent>
                  <IonText>
                    <h2>Gestion des utilisateurs</h2>
                    <p className="ion-padding-bottom">
                      Créez un nouvel utilisateur ou envoyez un email de réinitialisation de mot de passe.
                    </p>
                  </IonText>
                  
                  <IonItem className="ion-margin-bottom">
                    <IonInput
                      type="email"
                      label="Email de l'utilisateur"
                      labelPlacement="floating"
                      value={newUserEmail}
                      onIonInput={e => setNewUserEmail(e.detail.value || '')}
                      clearInput
                    />
                  </IonItem>

                  <div className="ion-margin-bottom" style={{ display: 'flex', gap: '8px' }}>
                    <IonButton
                      expand="block"
                      onClick={handleCreateUser}
                      style={{ flex: 1 }}
                    >
                      Créer l'utilisateur
                    </IonButton>
                    <IonButton
                      expand="block"
                      onClick={handleSendPasswordReset}
                      fill="outline"
                      style={{ flex: 1 }}
                    >
                      Réinitialiser le mot de passe
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AdminPanel; 