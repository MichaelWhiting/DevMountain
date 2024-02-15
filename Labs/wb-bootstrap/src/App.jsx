import Hero from './components/Hero.jsx';
import MainNav from './components/MainNav.jsx';
import Values from './components/Values.jsx';

import { Container, Navbar } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <MainNav
        brand="Jumble Juice"
        leftLinks={[
          { url: '#', text: 'About' },
          { url: '#', text: 'Contact' },
          { url: '#', text: 'Shop' },
        ]}
        rightLinks={[
          { url: '#', text: 'Login' },
          { url: '#', text: 'Favorites' },
          { url: '#', text: 'Settings' },
          { url: '#', text: 'Profile' },
        ]}
      />
      <Hero
        title="Jumble Juice, Where Flavor Meets Fitness!"
        lead="We believe in nourishing both body and soul with our delightful concoctions of healthy smoothies. Our mission is to make healthy living easy, accessible, and most importantly, incredibly delicious. Each sip of our signature smoothies takes you on a flavorful journey while fueling your body with essential nutrients."
      />
      <Values
        values={[
          {
            title: 'Freshness Unleashed',
            description:
              'Embrace the goodness of nature with every sip of our smoothies, crafted from the freshest, locally-sourced ingredients.',
            action: 'Try Now',
          },
          {
            title: 'Health with a Twist',
            description:
              'Treat yourself without compromise, as we blend flavors creatively to deliver wholesome goodness without added sugars or artificial additives.',
            action: 'Learn More',
          },
          {
            title: 'Community Wellbeing',
            description:
              'Join the Jumble Tribe and be a part of our health-conscious community, inspiring each other to lead active and joyful lives.',
            action: 'Join Us',
          },
        ]}
      />
    </>
  );
}
