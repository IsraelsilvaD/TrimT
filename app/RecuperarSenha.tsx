import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!email || !novaSenha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (novaSenha === confirmarSenha) {
      console.log('Email:', email);
      console.log('Nova Senha:', novaSenha);
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      router.replace('/TelaDeLogin'); // Redireciona para a Tela de Login
    } else {
      Alert.alert('Erro', 'As senhas não correspondem!');
    }
  };

  const handleCancel = () => {
    router.replace('/TelaDeLogin'); // Redireciona para a Tela de Login ao cancelar
  };

  return (
    <ImageBackground 
      source={require('../assets/images/imgFundo.jpeg')} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Recuperar Senha</Text>

          {/* Campo E-mail */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Digite seu e-mail</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Campo Nova Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Digite sua nova senha</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#ccc"
              value={novaSenha}
              onChangeText={setNovaSenha}
              secureTextEntry
            />
          </View>

          {/* Campo Confirmação de Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirme sua nova senha</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#ccc"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
          </View>

          {/* Botões Confirmar e Cancelar */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonConfirm} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo transparente
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white', // Cor dourada para o título
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  input: {
    width: '100%',
    padding: 1,
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonConfirm: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default RecuperarSenha;
