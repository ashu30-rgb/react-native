import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {

  const cardData = [
    {
      title: 'Hawa Mahal',
      label: 'Pink City, Jaipur',
      description:
        'Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India.',
      footer: '12 mins away',
      imageUrl:
        'https://static.toiimg.com/photo/48774245.cms',
    },
    {
      title: 'Taj Mahal',
      label: 'Agra, Uttar Pradesh',
      description:
        'An immense mausoleum of white marble, built in Agra by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.',
      footer: '30 mins away',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg',
    },
    {
      title: 'Gateway of India',
      label: 'Mumbai, Maharashtra',
      description:
        'The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai, in the Indian state of Maharashtra.',
      footer: '20 mins away',
      imageUrl:
        'https://www.theleela.com/prod/content/assets/styles/tl_1920_735/public/aio-banner/dekstop/Gateway-of-India.jpg?VersionId=ovBEK7XYSQwGwgF8grbLiVs330UArZQK&itok=lg8ZMWQq',
    },
    {
      title: 'Charminar',
      label: 'Hyderabad, Telangana',
      description:
        'The Charminar, constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad.',
      footer: '15 mins away',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Charminar_creative.jpg/1200px-Charminar_creative.jpg',
    },
    {
      title: 'Qutub Minar',
      label: 'Delhi',
      description:
        'Qutub Minar, at 73 meters, is the tallest brick minaret in the world and second highest minar in India after Fateh Burj at Mohali.',
      footer: '25 mins away',
      imageUrl:
        'https://www.incredibleindia.org/content/dam/incredible-india/images/delhi/delhi/attraction/qutub-minar/qutab-minar-delhi-attr-hero.jpg.transform/optimize-large/image.jpg',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <ContactList/>
        <FancyCard data={cardData}/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
