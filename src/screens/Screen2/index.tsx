import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles'; 

export default function Screen2({ route }) {
  const { name, CPF, dateNasc, CEP, price } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes do Paciente</Text>
      <View style={styles.patientContainer}>
        <Text style={styles.patientText}>Nome Completo: {name}</Text>
        <Text style={styles.patientText}>CPF: {CPF}</Text>
        <Text style={styles.patientText}>Data de Nascimento: {dateNasc}</Text>
        <Text style={styles.patientText}>CEP: {CEP}</Text>
        <Text style={styles.priceText}>Preço da Consulta: R$ {price}</Text>
      </View>
    </View>
  );
}
