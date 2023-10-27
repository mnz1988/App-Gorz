import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonContent, IonHeader, IonIcon, IonLabel, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, setupIonicReact} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import About from './pages/About'
import Sections from './pages/Sections'

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
import './main.css'
import { logoDiscord, logoTwitter } from 'ionicons/icons'


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <>
          <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Q&A / Connect</IonTitle>
            </IonToolbar>
          </IonHeader>
          
          <IonContent className="ion-padding">
            <a href='#' >
              <IonIcon icon={logoDiscord}/>
              <IonLabel> Link to Discord</IonLabel>
            </a>
          </IonContent>
          
          <IonToolbar color="dark">
            <IonTitle>Social Pages</IonTitle>
          </IonToolbar>
          
          <IonContent className="ion-padding">
          <IonIcon icon={logoTwitter}/> 
            X link, or Telegram Chl 
          </IonContent>
          
          <IonToolbar color="light">
            <IonTitle>Log In / Sign Up</IonTitle>
          </IonToolbar>
          <IonContent className="ion-padding">
            <a href='#' >
              <IonIcon icon={logoDiscord}/>
              <IonLabel> Link to Discord</IonLabel>
            </a>
          </IonContent>
          
          
        </IonMenu>

    </>

    <IonReactRouter>

      <IonTabs>

        <IonRouterOutlet>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          
          <Route path="/sections">
            <Sections />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom" >

          <IonTabButton tab="home" href="/home">
            {/* <IonIcon aria-hidden="true" icon={triangle} /> */}
            <IonLabel ><h2><strong>Home</strong></h2 ></IonLabel>
          </IonTabButton>

          <IonTabButton tab="about" href="/about">
            {/* <IonIcon aria-hidden="true" icon={ellipse} /> */}
            <IonLabel><h2 ><strong>About Us</strong></h2 ></IonLabel>
          </IonTabButton>

          <IonTabButton tab="sections" href="/sections">
            {/* <IonIcon aria-hidden="true" icon={square} /> */}
            <IonLabel><h2 ><strong>Sections</strong></h2 ></IonLabel>
          </IonTabButton>

          <IonTabButton >
          <IonPage id="main-content">
              <IonMenuButton>Join Us</IonMenuButton>
          </IonPage>
          </IonTabButton>

        </IonTabBar>

      </IonTabs>

    </IonReactRouter>

  </IonApp>

);

export default App;
