import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard
          data={{
            title: 'Hawa Mahal',
            label: 'Pink City, Jaipur',
            description:
              'Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India.',
            footer: '12 mins away',
            imageUrl:
              'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
        />
        <FancyCard
          data={{
            title: 'Taj Mahal',
            label: 'Agra, Uttar Pradesh',
            description:
              'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife',
            footer: '10 mins away',
            imageUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2imM6oIANbmbLc6SF-495SoqicNfaWtJ18xtDYRcFZw&s',
          }}
        />
        <FancyCard
          data={ {
            title: 'Gateway of India',
            label: 'Mumbai, Maharashtra',
            description:
              'The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai, in the Indian state of Maharashtra.',
            footer: '20 mins away',
            imageUrl:
              'https://img.veenaworld.com/wp-content/uploads/2021/03/Gateway-of-India-Mumbai-History-and-Heritage.jpeg',
          }}
        />
        <FancyCard
          data={{
            title: 'Charminar',
            label: 'Hyderabad, Telangana',
            description:
              'The Charminar, constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad.',
            footer: '15 mins away',
            imageUrl:
              'https://static.toiimg.com/thumb/msid-94144996,width-1280,height-720,resizemode-72/94144996.jpg',
          }}
        />
        <FancyCard
          data={{
            title: 'Qutub Minar',
            label: 'Delhi',
            description:
              'Qutub Minar, at 73 meters, is the tallest brick minaret in the world and second highest minar in India after Fateh Burj at Mohali.',
            footer: '25 mins away',
            imageUrl:
              'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/647_042717101905.jpg',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
