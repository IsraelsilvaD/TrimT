// app/TelaDeLogin.js ou app/TelaDeLogin.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router'; // Mude para 'expo-router' se estiver usando

const TelaDeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Lógica de login (substitua isso com sua lógica real)
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Lembrar de mim:', rememberMe);
    
    // Navega para a próxima tela se o login for bem-sucedido
    // navigation.navigate('TelaPrincipal'); // Descomente após implementar a lógica de login
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        required
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <Text style={rememberMe ? styles.checked : styles.unchecked}>
            {rememberMe ? '☑' : '☐'} Lembrar-me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleSubmit} />
      <Text>
        Não tem uma conta?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.forgotPassword}>Registre-se</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    margin: 8,
  },
  forgotPassword: {
    color: 'blue',
    marginLeft: 5,
  },
  checked: {
    margin: 8,
  },
  unchecked: {
    margin: 8,
    color: 'gray',
  },
});

export default TelaDeLogin;
