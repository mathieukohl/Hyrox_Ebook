import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonBadge,
  IonCheckbox,
  IonButton,
  useIonToast
} from '@ionic/react';
import { listOutline, trophyOutline, timeOutline, heartOutline, nutritionOutline, waterOutline, logOutOutline } from 'ionicons/icons';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const Competition: React.FC = () => {
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

  return (
    <IonPage>
      <Header /> 
      <IonContent className="ion-padding">
        <IonCard className="hero-card">
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Jour de Course</IonCardTitle>
            <IonCardSubtitle>Votre Guide de Préparation</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="hero-text" style={{ marginTop: '20px' }}>
              Le jour de la course est le moment de donner le meilleur de vous-même.
              Suivez ce guide pour vous assurer d'être parfaitement préparé.
            </p>
            <IonGrid>
              <IonRow className="ion-justify-content-center ion-align-items-center">
                {/* Premier chip */}
                <IonCol size="auto">
                  <IonChip className="ion-padding">
                    <IonIcon icon={timeOutline} />
                    <IonLabel>Arrivez 2h avant</IonLabel>
                  </IonChip>
                </IonCol>

                {/* Second chip, décalé d’1 colonne à partir de md */}
                <IonCol size="auto" offsetMd="1">
                  <IonChip className="ion-padding">
                    <IonIcon icon={trophyOutline} />
                    <IonLabel>Objectif atteignable</IonLabel>
                  </IonChip>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="12">
              <h2 className="section-title">Liste de Vérification</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="6" className={"ion-margin-bottom"}>
              <IonCard className="checklist-card">
                <IonCardHeader>
                  <IonCardTitle>Équipement</IonCardTitle>
                  <IonCardSubtitle>À apporter</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonCheckbox aria-label="Tenue de course">
                        <IonLabel>
                          <h3>Tenue de course</h3>
                          <p>Short, t-shirt, chaussettes</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Chaussures">
                        <IonLabel>
                          <h3>Chaussures</h3>
                          <p>Running et cross-training</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6" className={"ion-margin-bottom"}>
              <IonCard className="checklist-card">
                <IonCardHeader>
                  <IonCardTitle>Nutrition</IonCardTitle>
                  <IonCardSubtitle>À prévoir</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonCheckbox aria-label="Petit-déjeuner">
                        <IonLabel>
                          <h3>Petit-déjeuner</h3>
                          <p>3- 4h avant la course</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Collation">
                        <IonLabel>
                          <h3>Collation</h3>
                          <p>1h avant la course</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Boissons">
                        <IonLabel>
                          <h3>Boissons</h3>
                          <p>Eau et boisson énergétique</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                    <IonItem>
                      <IonCheckbox aria-label="Gels énergétiques">
                        <IonLabel>
                          <h3>Gels énergétiques</h3>
                          <p>Pour pendant la course</p>
                        </IonLabel>
                      </IonCheckbox>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Stratégie de Course</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon className='ion-margin-end' slot="start" icon={timeOutline} />
                <IonLabel>
                  <h3>Pace de Course</h3>
                  <p>Maintenez un rythme régulier</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon className='ion-margin-end' slot="start" icon={heartOutline} />
                <IonLabel>
                  <h3>Gestion de l'Effort</h3>
                  <p>Répartissez votre énergie</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon className='ion-margin-end' slot="start" icon={nutritionOutline} />
                <IonLabel>
                  <h3>Nutrition</h3>
                  <p>Hydratation régulière</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon className='ion-margin-end' slot="start" icon={trophyOutline} />
                <IonLabel>
                  <h3>Objectifs</h3>
                  <p>Fixez des repères</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Competition; 