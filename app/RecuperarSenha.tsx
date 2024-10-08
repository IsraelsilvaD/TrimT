// app/RecuperarSenha.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const RecuperarSenha = () => {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para recuperar a senha
    console.log('Nova Senha:', novaSenha);
    console.log('Confirmar Senha:', confirmarSenha);

    if (novaSenha === confirmarSenha) {
      // Navegue para a tela de login após confirmar a nova senha
      navigation.navigate('TelaDeLogin'); // Navegar após o sucesso
    } else {
      alert('As senhas não correspondem!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Recuperar Senha</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Digite sua nova senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Nova Senha"
              value={novaSenha}
              onChangeText={setNovaSenha}
              secureTextEntry
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirme sua senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua Senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
          </View>
          <Button title="Confirmar" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // fundo leve
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400, // largura máxima do formulário
    backgroundColor: 'white', // cor do fundo do formulário
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // sombra no Android
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default RecuperarSenha;
