import { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const generateRandomColor = () => {
  const randromColorRCanal = Math.floor(Math.random() * 255)
  const randromColorGCanal = Math.floor(Math.random() * 255)
  const randromColorBCanal = Math.floor(Math.random() * 255)

  return `rgb(${randromColorRCanal},${randromColorGCanal},${randromColorBCanal})`
}

export default function HomeScreen() {
  const [color, setColor] = useState(generateRandomColor())
  const onPress = () => { setColor(generateRandomColor()) }
  return (
    <Pressable style={[
      styles.container, { backgroundColor: color }
    ]} onPress={onPress}>
      <Text>
        Hello there
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
