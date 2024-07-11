import React from 'react';
import { View, Text, Image } from 'react-native';
import ColorList from '../components/ColorList';

const Explore = () => {
  const imageSource = require('/home/zer0day/ecom/mercato/assets/images/3231246.png'); // Adjust path (static)
  // const imageUrl = 'https://www.example.com/image.png'; // Uncomment for network image

  return (
    <View>
      <Text>Explore</Text>
      <Image source={imageSource} style={{ width: '100', height: 300, resizeMode: 'cover' }} />
      {/* <Image source={{ uri: imageUrl }} style={{ width: 200, height: 150 }} />  Uncomment for network image */}
    </View>
  );
};

export default Explore;
