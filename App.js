import React, { useState } from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View, Image } from 'react-native';
import sonic from './assets/sonic.png';
import sonicc from './assets/sonicc.png';

  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default function App() {
  const [expanded, setExpanded] = useState(false);
  return (
  <View style={style.container}>
  <TouchableOpacity
  onPress={() => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  setExpanded(!expanded);
 
 }}>
 <Text>Toque em mim para {expanded ? 'retrair' : 'expandir'}!</Text>
 
 </TouchableOpacity>
 {expanded && (
 <View style={style.tile}>
 <Image source= {sonic} style={{width:190, height:200}}/>
 <Image source= {sonicc} style={{width:190, height:200}}/>
 </View>
 )}
 </View>
 );
}
const style = StyleSheet.create({
 tile: {
 borderWidth: 0.5,
 borderColor: '#d6d7da',
 },
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 overflow: 'hidden',
 },
});

