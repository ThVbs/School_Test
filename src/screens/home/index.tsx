import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home({ navigation }) {
  const navigateToScreen1 = () => {
    navigation.navigate('Screen1');
  };

  const navigateToScreen2 = (item) => {
    navigation.navigate('Screen2', item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>

      <TouchableOpacity style={styles.btn} onPress={navigateToScreen1}>
        <Text style={styles.btnText}>Agendamento Consulta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={navigateToScreen2}>
        <Text style={styles.btnText}>Pacientes Agendados</Text>
      </TouchableOpacity>
    </View>
    
  );
  
}
