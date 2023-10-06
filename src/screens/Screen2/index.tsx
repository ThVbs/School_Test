import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles'; 

export default function Screen2({ route }) {
  const { name, CPF, dateNasc, CEP, price } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes do Paciente</Text>
      <View style={styles.patientContainer}>
        <Text style={styles.patientText}>Nome Completo: Tiago Martins Rodrigues João {name}</Text>
        <Text style={styles.patientText}>CPF: 098-747-869.90 {CPF}</Text>
        <Text style={styles.patientText}>Data de Nascimento: 26/05/2005 {dateNasc}</Text>
        <Text style={styles.patientText}>CEP: 88048-422{CEP}</Text>
        <Text style={styles.priceText}>Preço da Consulta: R$ xxx,xx{price}</Text>
      </View>
    </View>
  );
}
