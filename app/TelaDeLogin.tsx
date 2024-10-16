import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; // Usando Link para navegação
import axios from 'axios';

const TelaDeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://192.168.0.100:8080/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        // A navegação será realizada com o Link no botão de login
      } else {
        Alert.alert('Erro', 'Erro ao realizar login.');
      }
    } catch (error) {
      console.error('Erro na requisição', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o login.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/imgFundo.jpeg')} 
      style={styles.loginBackground}
    >
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkboxItem} onPress={() => setRememberMe(!rememberMe)}>
            <Text style={[styles.checkboxText, rememberMe && styles.checked]}>
              {rememberMe ? '☑' : '☐'} Lembrar-me
            </Text>
          </TouchableOpacity>

          <View style={styles.forgotPasswordContainer}>
            <Link href="/RecuperarSenha" style={styles.forgotPasswordLink}>Esqueceu a senha?</Link>
          </View>
        </View>

        {/* Botão de Login com Link para Agendamentos */}
        <Link href="/ServicosRecomendados" asChild>
          <TouchableOpacity disabled={isLoading} onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Carregando...' : 'Login'}
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.options}>
          <Text style={styles.optionText}> Não tem uma conta?
            <Link href="/TelaDeRegistro" style={styles.registerLink}>Registre-se</Link>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, 
    width: '80%',
    maxWidth: 400,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: 'white',
  },
  checked: {
    color: 'white',
  },
  options: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'left',
  },
  optionText: {
    color: 'white',
  },
  registerLink: {
    color: '#FFD700',
    textDecorationLine: 'underline',
    padding: 10,
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
  },
  forgotPasswordContainer: {
    marginLeft: 10,
  },
  forgotPasswordLink: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});

export default TelaDeLogin;
