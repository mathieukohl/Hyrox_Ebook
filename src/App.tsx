import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, trophyOutline, fitnessOutline, settingsOutline, bookOutline, bodyOutline } from 'ionicons/icons';

// Pages
import Login from './pages/Login';
import Introduction from './pages/Introduction';
import Understanding from './pages/Understanding';
import TrainingProgram from './pages/TrainingProgram';
import Competition from './pages/Competition';
import Phase1 from './pages/training/Phase1';
import Phase2 from './pages/training/Phase2';
import Phase3 from './pages/training/Phase3';
import UpperBodyPhase1 from './pages/training/phase1/UpperBody';
import LowerBodyPhase1 from './pages/training/phase1/LowerBody';
import HyroxSpecificPhase1 from './pages/training/phase1/HyroxSpecific';
import UpperBodyPhase2 from './pages/training/phase2/UpperBody';
import LowerBodyPhase2 from './pages/training/phase2/LowerBody';
import HyroxSpecificPhase2 from './pages/training/phase2/HyroxSpecific';
import UpperBodyPhase3 from './pages/training/phase3/UpperBody';
import LowerBodyPhase3 from './pages/training/phase3/LowerBody';
import HyroxSpecificPhase3 from './pages/training/phase3/HyroxSpecific';
import AdminPanel from './pages/AdminPanel';

// Components
import Header from './components/Header';

// Auth
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ReloadPrompt from './components/ReloadPrompt';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/training.css';

setupIonicReact();

const AppContent: React.FC = () => {
  const { currentUser } = useAuth();

  const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
      <Header />
      {children}
    </>
  );

  return (
    <IonReactRouter basename="/Hyrox_Ebook">
      {currentUser ? (
        <IonTabs>
          <IonRouterOutlet>
            <PrivateRoute 
              exact 
              path="/admin"
              component={(props: any) => (
                <PrivateLayout>
                  <AdminPanel {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/introduction" 
              component={(props: any) => (
                <PrivateLayout>
                  <Introduction {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/understanding" 
              component={(props: any) => (
                <PrivateLayout>
                  <Understanding {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training" 
              component={(props: any) => (
                <PrivateLayout>
                  <TrainingProgram {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase1" 
              component={(props: any) => (
                <PrivateLayout>
                  <Phase1 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase1/upper-body" 
              component={(props: any) => (
                <PrivateLayout>
                  <UpperBodyPhase1 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase1/lower-body" 
              component={(props: any) => (
                <PrivateLayout>
                  <LowerBodyPhase1 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase1/hyrox-specific" 
              component={(props: any) => (
                <PrivateLayout>
                  <HyroxSpecificPhase1 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase2" 
              component={(props: any) => (
                <PrivateLayout>
                  <Phase2 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase2/upper-body" 
              component={(props: any) => (
                <PrivateLayout>
                  <UpperBodyPhase2 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase2/lower-body" 
              component={(props: any) => (
                <PrivateLayout>
                  <LowerBodyPhase2 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase2/hyrox-specific" 
              component={(props: any) => (
                <PrivateLayout>
                  <HyroxSpecificPhase2 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase3" 
              component={(props: any) => (
                <PrivateLayout>
                  <Phase3 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase3/upper-body" 
              component={(props: any) => (
                <PrivateLayout>
                  <UpperBodyPhase3 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase3/lower-body" 
              component={(props: any) => (
                <PrivateLayout>
                  <LowerBodyPhase3 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/training/phase3/hyrox-specific" 
              component={(props: any) => (
                <PrivateLayout>
                  <HyroxSpecificPhase3 {...props} />
                </PrivateLayout>
              )} 
            />
            <PrivateRoute 
              exact 
              path="/competition" 
              component={(props: any) => (
                <PrivateLayout>
                  <Competition {...props} />
                </PrivateLayout>
              )} 
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {currentUser?.email === 'adminhyrox@gmail.com' && (
              <IonTabButton tab="admin" href="/admin">
                <IonIcon icon={settingsOutline} />
                <IonLabel>Admin</IonLabel>
              </IonTabButton>
            )}
            <IonTabButton tab="introduction" href="/introduction">
              <IonIcon icon={calendarOutline} />
              <IonLabel>Introduction</IonLabel>
            </IonTabButton>
            <IonTabButton tab="understanding" href="/understanding">
              <IonIcon icon={bookOutline} />
              <IonLabel>Comprendre</IonLabel>
            </IonTabButton>
            <IonTabButton tab="training" href="/training">
              <IonIcon icon={fitnessOutline} />
              <IonLabel>Programme</IonLabel>
            </IonTabButton>
            <IonTabButton tab="competition" href="/competition">
              <IonIcon icon={trophyOutline} />
              <IonLabel>Course</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      ) : (
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      )}
    </IonReactRouter>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <IonApp>
        <AppContent />
        <ReloadPrompt />
      </IonApp>
    </AuthProvider>
  );
};

export default App; 