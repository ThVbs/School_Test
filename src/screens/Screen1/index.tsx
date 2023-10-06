import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { styles } from './styles';

export default function Home() {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [dateNasc, setdateNasc] = useState('');
  const [CEP, setCEP] = useState('');
  const [Relato, setRelato] = useState('');

  const [userData, setUserData] = useState([]);

  const generateRandomPrice = () => {
    return (Math.random() * (200 - 50) + 50).toFixed(2);
  };

  const handleUserAdd = () => {
    if (name === '' || CPF === '' || dateNasc === '' || CEP === '' || Relato === '') {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    const newPrice = generateRandomPrice(); 
    const newUser = { id: (userData.length + 1).toString(), name, CPF, dateNasc, CEP, Relato, price: newPrice };
    setUserData([...userData, newUser]);
    setName('');
    setCPF('');
    setdateNasc('');
    setCEP('');
    setRelato('');

    // Exiba os dados no console.log
    console.log('Novo paciente adicionado:');
    console.log('Nome Completo:', name);
    console.log('CPF:', CPF);
    console.log('Data de Nascimento:', dateNasc);
    console.log('CEP:', CEP);
    console.log('Preço da Consulta:', newPrice);
    console.log('Relato do Paciente:', Relato);

  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nome Completo: {item.name}</Text>
      <Text style={styles.itemText}>CPF: {item.CPF}</Text>
      <Text style={styles.itemText}>Data de Nascimento: {item.dateNasc}</Text>
      <Text style={styles.itemText}>CEP: {item.CEP}</Text>
      <Text style={styles.itemText}>Preço da Consulta: R$ {item.price}</Text>
      <Text style={styles.itemText}>Relato do Paciente: {item.Relato}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende sua consulta médica aqui</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome Completo'
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder='CPF'
        onChangeText={setCPF}
        value={CPF}
      />

      <TextInput
        style={styles.input}
        placeholder='Data de Nascimento'
        onChangeText={setdateNasc}
        value={dateNasc}
      />

      <TextInput
        style={styles.input}
        placeholder='CEP'
        onChangeText={setCEP}
        value={CEP}
      />

<TextInput
        style={styles.input}
        placeholder='Relato do Paciente'
        onChangeText={setRelato}
        value={Relato}
      />

      <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
        <Text style={styles.btnTxT}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}
