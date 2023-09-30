import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randomColor, setRandomColor] = useState('#ffffff');
  const [squareColor, setSquareColor] = useState('#ffffff');
  const [rectangleColor, setRectangleColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() *16)]    
    }

    setRandomColor(color);
    generateSquareColor();
    generateRectangleColor();
  }
  const generateSquareColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() *16)]    
    }

    setSquareColor(color);
  }
  const generateRectangleColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() *16)]    
    }

    setRectangleColor(color);
  }
  return (
    <>
     <StatusBar backgroundColor={randomColor}
      animated={true}/>
     <View style={[styles.container, {backgroundColor: randomColor}]}>
     <View style={[styles.rectangle, {backgroundColor: rectangleColor}]}>
          <Text style={styles.txt}>rectangle</Text>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.btn}>
            <Text style={styles.btnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.square, {backgroundColor: squareColor}]}>
          <Text style={styles.txt}>Square</Text>
        </View>
        
     </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#6a14bd',
    borderRadius: 6
  },
  btnTxt:{
    color: '#fff',
    fontSize: 24,
    textTransform: 'uppercase'
  },
  square:{
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 15,
    
  },
  rectangle:{
    width: 250,
    height: 100,
    borderRadius: 6,
    margin: 15,
  },
  txt:{
    flex:1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
  }
 
})