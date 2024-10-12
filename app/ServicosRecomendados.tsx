import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; // Importando o Link do expo-router

// Importando todas as imagens em um único objeto
const img = {
  corteCabelo: require('../assets/images/corteCabelo.jpg'),
  barba: require('../assets/images/barba.jpeg'),
  barboterapia: require('../assets/images/barboterapia.jpeg'),
  acabamento: require('../assets/images/acabamento.jpeg'),
};

const ServicosRecomendados = () => {
  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')} // Definindo a imagem de fundo
      style={styles.backgroundImage}
    >
      {/* Seção de boas-vindas */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Olá, João Ricardo</Text>
        {/* Aqui você pode adicionar mais elementos, como a data atual */}
      </View>

      {/* Título "Serviços Recomendados" */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Serviços Recomendados</Text>
      </View>

      {/* Cards de serviços */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardsRow}>
          <Link href="/CalendarioComponent" style={styles.cardContainer}>
            <Image source={img.corteCabelo} style={styles.image} />
            <Text style={styles.text}>Corte de Cabelo</Text>
            <Text style={styles.price}>R$ 30,00</Text>
          </Link>

          <Link href="/CalendarioComponent" style={styles.cardContainer}>
            <Image source={img.barba} style={styles.image} />
            <Text style={styles.text}>Barba</Text>
            <Text style={styles.price}>R$ 20,00</Text>
          </Link>
        </View>

        <View style={styles.cardsRow}>
          <Link href="/CalendarioComponent" style={styles.cardContainer}>
            <Image source={img.barboterapia} style={styles.image} />
            <Text style={styles.text}>Barboterapia</Text>
            <Text style={styles.price}>R$ 40,00</Text>
          </Link>

          <Link href="/CalendarioComponent" style={styles.cardContainer}>
            <Image source={img.acabamento} style={styles.image} />
            <Text style={styles.text}>Pezinho</Text>
            <Text style={styles.price}>R$ 15,00</Text>
          </Link>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomeContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    marginTop: 20,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: 150,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default ServicosRecomendados;
