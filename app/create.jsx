import React from 'react';
import { View, Text, Image } from 'react-native';
import ColorList from '../components/ColorList';

const Create = () => {
  const imageSource = require('/home/zer0day/ecom/mercato/assets/images/1764669.jpg'); // Adjust path (static)
  

  return (
    <View>
      <Text>Create</Text>
      <Image source={imageSource} style={{ width: '100', height: 300, resizeMode: 'repeat' }} />
      {/* <Image source={{ uri: imageUrl }} style={{ width: 200, height: 150 }} />  Uncomment for network image */}
    </View>
  );
};

export default Create;
