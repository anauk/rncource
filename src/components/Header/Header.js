import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { viesSt, textSt} = styles;
  return (
    <View style={viesSt}>
      <Text style={textSt}>{props.title}</Text>
    </View>
  )
};

export default Header

const styles = StyleSheet.create({
viesSt: {
  width: '100%',
  height: 130,
  justifyContent: 'center',
  paddingTop: 71,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative',
  backgroundColor: 'red',
  paddingLeft: 15
},
  textSt: {
  color: '#fff',
    fontSize: 28
    }
});