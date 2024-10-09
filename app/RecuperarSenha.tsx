import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const RecuperarSenha = () => {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = () => {
    console.log('Nova Senha:', novaSenha);
    console.log('Confirmar Senha:', confirmarSenha);

    if (novaSenha === confirmarSenha) {
      console.log('Senha alterada com sucesso, redirecionando para TelaDeLogin');
      // Aqui você pode adicionar a lógica de navegação
    } else {
      alert('As senhas não correspondem!');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/imgFundo.jpeg')} // Certifique-se de que o caminho da imagem está correto
      style={styles.container}
    >
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
          <Button title="Confirmar" onPress={handleSubmit} color="#FFD700" />
          <Link href="/TelaDeLogin" style={styles.link}>
            Ir para a Tela de Login
          </Link>
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
    backgroundColor:  'rgba(255, 255, 255, 0.2)', // Tornar o fundo completamente transparente
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
    color: '#FFD700',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    backgroundColor: 'transparent',
  },
  link: {
    marginTop: 15,
    color: '#FFD700',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default RecuperarSenha;
