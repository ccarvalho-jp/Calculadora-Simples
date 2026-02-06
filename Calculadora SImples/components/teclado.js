import React from 'react';
import { View } from 'react-native';
import Botao from './botao';
import styles from '../styles/styles';

export default function Teclado({ 
  adicionarNumero, 
  adicionarPonto, 
  limpar, 
  selecionarOperacao, 
  calcular 
}) {
  return (
    <View style={styles.botoesContainer}>
      //Linha 1
      <View style={styles.linha}>
        <Botao texto="C" onPress={limpar} estilo={styles.botaoFuncao} />
        <Botao texto="÷" onPress={() => selecionarOperacao('÷')} estilo={styles.botaoOperacao} />
      </View>

      //Linha 2 
      <View style={styles.linha}>
        <Botao texto="7" onPress={() => adicionarNumero(7)} />
        <Botao texto="8" onPress={() => adicionarNumero(8)} />
        <Botao texto="9" onPress={() => adicionarNumero(9)} />
        <Botao texto="×" onPress={() => selecionarOperacao('×')} estilo={styles.botaoOperacao} />
      </View>

      // Linha 3 
      <View style={styles.linha}>
        <Botao texto="4" onPress={() => adicionarNumero(4)} />
        <Botao texto="5" onPress={() => adicionarNumero(5)} />
        <Botao texto="6" onPress={() => adicionarNumero(6)} />
        <Botao texto="-" onPress={() => selecionarOperacao('-')} estilo={styles.botaoOperacao} />
      </View>

     //Linha 4 
      <View style={styles.linha}>
        <Botao texto="1" onPress={() => adicionarNumero(1)} />
        <Botao texto="2" onPress={() => adicionarNumero(2)} />
        <Botao texto="3" onPress={() => adicionarNumero(3)} />
        <Botao texto="+" onPress={() => selecionarOperacao('+')} estilo={styles.botaoOperacao} />
      </View>

      //Linha 5 
      <View style={styles.linha}>
        <Botao texto="0" onPress={() => adicionarNumero(0)} estilo={styles.botaoZero} />
        <Botao texto="." onPress={adicionarPonto} />
        <Botao texto="=" onPress={calcular} estilo={styles.botaoIgual} />
      </View>
    </View>
  );
}