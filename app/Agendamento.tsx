import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const Agendamento = () => {
  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')}
      style={styles.backgroundImage}
    >
      {/* Título "Profissionais" */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Serviços</Text>
      </View>

      {/* Cards dos profissionais */}
      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <Image source={require('../assets/images/profissional 1.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Profissional 1</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/images/profissional 1.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Profissional 2</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/images/profissional 1.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Profissional 3</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/images/profissional 1.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Profissional 4</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 220,
    left: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  cardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  card: {
    alignItems: 'center',
    width: 100,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
});

export default Agendamento;
