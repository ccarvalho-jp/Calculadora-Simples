import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

export default function Botao({ texto, onPress, estilo, estiloTexto }) {
  return (
    <TouchableOpacity 
      style={[styles.botao, estilo]} 
      onPress={onPress}
    >
      <Text style={[styles.textoBotao, estiloTexto]}>{texto}</Text>
    </TouchableOpacity>
  );
}