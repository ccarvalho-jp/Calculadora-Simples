import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 60,
    paddingBottom: 20,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  display: {
    fontSize: 60,
    color: 'white',
    fontWeight: '300',
  },
  botoesContainer: {
    flex: 5,
    padding: 10,
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    backgroundColor: 'gray',
    margin: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  textoBotao: {
    fontSize: 30,
    color: 'white',
  },
  botaoZero: {
    flex: 2,
  },
  botaoOperacao: {
    backgroundColor: 'orange',
  },
  botaoFuncao: {
    backgroundColor: 'red',
    flex: 3,
  },
  botaoIgual: {
    backgroundColor: 'orange',
  },
});

export default styles;