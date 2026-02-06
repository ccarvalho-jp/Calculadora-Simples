import React, { useState } from 'react';
import { View } from 'react-native';
import Display from './components/Display';
import Teclado from './components/teclado';
import styles from './styles/styles';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [valor, setValor] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [novoNumero, setNovoNumero] = useState(true);
  const adicionarNumero = (num) => {
    if (novoNumero) {
      setDisplay(String(num));
      setNovoNumero(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };
  const adicionarPonto = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setNovoNumero(false);
    }
  };

  const limpar = () => {
    setDisplay('0');
    setValor(null);
    setOperacao(null);
    setNovoNumero(true);
  };

  const selecionarOperacao = (op) => {
    if (valor !== null && operacao !== null && !novoNumero) {
      calcular();
    }
    setValor(parseFloat(display));
    setOperacao(op);
    setNovoNumero(true);
  };

  const calcular = () => {
    const atual = parseFloat(display);
    let resultado = 0;

    switch (operacao) {
      case '+':
        resultado = valor + atual;
        break;
      case '-':
        resultado = valor - atual;
        break;
      case '×':
        resultado = valor * atual;
        break;
      case '÷':
        resultado = atual !== 0 ? valor / atual : 'Erro';
        break;
      default:
        return;
    }

    setDisplay(String(resultado));
    setValor(null);
    setOperacao(null);
    setNovoNumero(true);
  };

  return (
    <View style={styles.container}>
      <Display valor={display} />
      <Teclado
        adicionarNumero={adicionarNumero}
        adicionarPonto={adicionarPonto}
        limpar={limpar}
        selecionarOperacao={selecionarOperacao}
        calcular={calcular}
      />
    </View>
  );
}