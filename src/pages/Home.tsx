import { IonContent, IonPage, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, } from '@ionic/react'

import MyHeader from './MyHeader'
import MyLottieBG from './MyLottieBg'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent fullscreen className="ion-padding">
      <MyLottieBG/>

      <IonGrid >
        <IonRow>
          <IonCol size-xs="11" size-sm="11" size-md="6" size-lg="6" size-xl="5">
            
            <IonCard>
          
              <IonCardHeader>
            
                <IonCardTitle>Next Dimension of P2P Investment</IonCardTitle>
            
                <IonCardSubtitle>about:</IonCardSubtitle>
          
              </IonCardHeader>
          
              <IonCardContent>
              GORZ is a peer-to-peer investment community that invites like-minded, visionary, and elite investors to access a new class of investments in sectors aligned with the future of the world economic stage. By harnessing the power of nature in a sustainable economic model, GORZ offers its community the opportunity to make a positive impact on society and the environment while also generating profits. GORZ's young and experienced team is equipped with interdisciplinary capabilities and is committed to anticipating profitability and scaling the business while striving to meet its ambitious impact goals.
              </IonCardContent>
        
            </IonCard>
        
          </IonCol>
          <IonCol size-xs="1" size-sm="1" size-md="6" size-lg="6" size-xl="7"></IonCol>

          <IonCol size-xs="11" size-sm="11" size-md="6" size-lg="6" size-xl="5">
            <IonCard>
            
              <IonCardHeader>
            
                <IonCardTitle>Why Invest with GORZ?</IonCardTitle>
            
                <IonCardSubtitle>T1 Economic Model: </IonCardSubtitle>
          
              </IonCardHeader>
          
              <IonCardContent>
              Adaptive Multidisciplinary business models for each economic practice to ensure resilience, ever-scalibility and multiple revenue streams at individual and collective projects level.
              </IonCardContent>

              <IonCardHeader>
            
                <IonCardSubtitle>High Impact:</IonCardSubtitle>
          
              </IonCardHeader>
              <IonCardContent>
              T1 model allows Gorz to have considerable multilateral impact on  various aspects of local and broader communities & environment, while generating wealth
              </IonCardContent>
        
              <IonCardHeader>
            
                <IonCardSubtitle>Experience</IonCardSubtitle>
          
              </IonCardHeader>
              <IonCardContent>
                Combination of IRL and Web3 experiences in inflationary environments, gives us the ability to identify untapped areas with high potential, enabling us to stay ahead of the curve and pioneer trends.
              </IonCardContent>
        
              <IonCardHeader>
            
                <IonCardSubtitle>Full Transparency: </IonCardSubtitle>
          
              </IonCardHeader>
              <IonCardContent>
              Integrating blockchain into T1 economic models, gives us and our community the ability to have a clear and transparent view over projects, supply chains and funds, while streamlining the investment process. 
              </IonCardContent>
        
            </IonCard>
          </IonCol>
          <IonCol size-xs="1" size-sm="1" size-md="6" size-lg="6" size-xl="7"></IonCol>
        
        </IonRow>

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default Home