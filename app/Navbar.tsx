import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.leftSection}>
        <View style={styles.logoContainer}>
          {/* Substitua o caminho pelo seu caminho absoluto ou relativo para a imagem */}
          <Image 
            source={require('../assets/images/logo.jpeg')} // Use o caminho local da imagem aqui
            style={styles.logo} 
          />
        </View>
        <TouchableOpacity onPress={() => console.log('Navegar para Início')}>
          <Text style={styles.navLink}>Início</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => console.log('Logout')} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1C1C1C',
    width: '100%',
    zIndex: 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD700',
    marginRight: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  navLink: {
    color: '#FFD700',
    fontSize: 18,
  },
  logoutButton: {
    padding: 8,
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  logoutText: {
    color: '#1C1C1C',
    fontSize: 16,
  },
});
