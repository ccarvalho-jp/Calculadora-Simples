import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function Display({ valor }) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.display}>{valor}</Text>
    </View>
  );
}