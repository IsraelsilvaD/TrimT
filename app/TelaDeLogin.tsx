import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, Link } from 'expo-router'; // Adicione Link aqui

const TelaDeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Lembrar de mim:', rememberMe);

    // Implementar a lógica de autenticação aqui antes de navegar
  };

  return (
    <ImageBackground 
      source={require('../assets/images/imgFundo.jpeg')} // Certifique-se de que o caminho da imagem está correto
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
          placeholderTextColor="#ccc" // Cor do texto do placeholder
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc" // Cor do texto do placeholder
        />
        
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkboxItem} onPress={() => setRememberMe(!rememberMe)}>
            <Text style={[styles.checkboxText, rememberMe && styles.checked]}>
              {rememberMe ? '☑' : '☐'} Lembrar-me
            </Text>
          </TouchableOpacity>

          {/* Novo View para alinhar "Esqueceu a senha?" ao lado de "Lembrar-me" */}
          <View style={styles.forgotPasswordContainer}>
            <Link href="/RecuperarSenha" style={styles.forgotPasswordLink}>Esqueceu a senha?</Link> 
          </View>
        </View>

        <Button title="Login" onPress={handleSubmit} color="#FFD700" />

        <View style={styles.options}>
          <Text style={styles.optionText}>
            Não tem uma conta? <Text style={styles.registerLink}>Cadastre-se</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1, // Preenche toda a tela
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo com leve transparência
    padding: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Efeito de sombra para Android
    color: 'white',
    width: '80%', // Largura responsiva
    maxWidth: 400, // Limite máximo de largura
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFD700',
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
    justifyContent: 'space-between', // Espaço entre os elementos
    width: '100%', // Para ocupar toda a largura
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: 'white',
  },
  checked: {
    color: '#FFD700',
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
  },
  forgotPasswordContainer: {
    marginLeft: 10, // Espaço entre "Lembrar-me" e "Esqueceu a senha?"
  },
  forgotPasswordLink: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});

export default TelaDeLogin;
