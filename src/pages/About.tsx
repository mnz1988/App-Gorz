import { IonContent, IonPage, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, } from '@ionic/react'

import MyHeader from './MyHeader'
import MyLottieBG from './MyLottieBg'
import './Home.css'

const About: React.FC = () => {
  return (
    <IonPage>
      <MyHeader/>
      <IonContent fullscreen className="ion-padding">
      <MyLottieBG/>

      <IonGrid >
        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="2" size-lg="2" size-xl="3"/>
          <IonCol size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="6">
            <IonCard><IonCardHeader>
                <IonCardTitle>About Us:</IonCardTitle>
                <IonCardSubtitle>Story:</IonCardSubtitle></IonCardHeader>
              <IonCardContent>
                Gorz is a visionary community of elite investors on the fabric of blockchain, exploring the frontiers of emerging realms of economy and technology. We are disrupting the investment industry by using blockchain technology to remove the intermediaries and hardship of traditional investment models.
                Our T1 Economic model gives investors new levels of freedom of choice, transparency, and security in a sustainable and fully circular model. Gorz is not just resilient, it is designed to thrive in the ever-changing world economy.
                At Gorz, we believe that everyone deserves the opportunity to invest in their future. That's why we are committed to making investing more accessible and affordable for everyone. Our platform is easy to use and navigate, and our team of experts is always on hand to provide support and guidance.
                We are a young, yet experienced team equipped with interdisciplinary capabilities in various sectors. We are passionate about innovation and impact, and we are committed to building a better future for all. 
                Join our Type 1 Community of like-minded, visionary & elite investors of future!
              </IonCardContent></IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="2" size-lg="2" size-xl="3"/>
        </IonRow>

        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="1" size-lg="1" size-xl="2"/>
          <IonCol size-xs="12" size-sm="12" size-md="5" size-lg="5" size-xl="4">
            <IonCard><IonCardHeader>
                <IonCardTitle>Mission:</IonCardTitle></IonCardHeader>
              <IonCardContent>
                GORZ offers a streamlined, transparent investment opportunity in untapped markets, powered by nature and blockchain. Our unique Economic Model enables investors to earn substantial profit while making a positive impact on local communities, the environment, and society.
              </IonCardContent></IonCard></IonCol>

          <IonCol size-xs="12" size-sm="12" size-md="5" size-lg="5" size-xl="4">
            <IonCard><IonCardHeader>
                <IonCardTitle>Vision:</IonCardTitle></IonCardHeader>
              <IonCardContent>
                We believe in creating a more equitable and prosperous future for all. We are committed to building a Type 1 Community, where people can live in harmony with nature and enjoy the full bounty of the Earth while flourishing their full potential.
              </IonCardContent></IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="1" size-lg="1" size-xl="2"/>
        </IonRow>

        <IonRow>
          <IonCol size-xs="0" size-sm="0" size-md="3" size-lg="3" size-xl="4"/>
          <IonCol size-xs="12" size-sm="12" size-md="6" size-lg="6" size-xl="4">
            <IonCard><IonCardHeader>
                <IonCardTitle>Values: </IonCardTitle></IonCardHeader>
              <IonCardContent>
                Sustainability, Community, Innovation
              </IonCardContent></IonCard></IonCol>
          <IonCol size-xs="0" size-sm="0" size-md="3" size-lg="3" size-xl="4"/>
        </IonRow>

      </IonGrid>

      </IonContent>
      
    </IonPage>
  );
};

export default About