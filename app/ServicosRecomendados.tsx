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
  // Função para formatar a data
  const getFormattedDate = () => {
    const options = { weekday: 'long' as const, day: 'numeric' as const, month: 'long' as const };
    return new Date().toLocaleDateString('pt-BR', options);
  };

  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')}
      style={styles.backgroundImage}
    >
      {/* Seção de boas-vindas */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Olá, João Ricardo</Text>
        <Text style={styles.dateText}>{getFormattedDate()}</Text> {/* Data formatada */}
      </View>


      {/* Título "Serviços Recomendados" */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Serviços Recomendados</Text>
      </View>

      {/* Cards de serviços */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardContainer}>
          <Link href="/CalendarioComponent" style={styles.card}>
            <Image source={img.corteCabelo} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Corte de Cabelo</Text>
              <Text style={styles.price}>R$ 30,00</Text>
            </View>
          </Link>
        </View>
        <View style={styles.cardContainer}>
          <Link href="/CalendarioComponent" style={styles.card}>
            <Image source={img.barba} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Barba</Text>
              <Text style={styles.price}>R$ 20,00</Text>
            </View>
          </Link>
        </View>
        <View style={styles.cardContainer}>
          <Link href="/CalendarioComponent" style={styles.card}>
            <Image source={img.barboterapia} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Barboterapia</Text>
              <Text style={styles.price}>R$ 40,00</Text>
            </View>
          </Link>
        </View>
        <View style={styles.cardContainer}>
          <Link href="/CalendarioComponent" style={styles.card}>
            <Image source={img.acabamento} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Pezinho</Text>
              <Text style={styles.price}>R$ 15,00</Text>
            </View>
          </Link>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
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
  dateText: {
    fontSize: 16,
    color: '#fff',
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
  cardContainer: {
    marginBottom: 20, // Espaçamento entre os cards
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#141109',
    borderRadius: 10,
    padding: 0, // Remover o padding do card
    alignItems: 'center',
    width: '90%', // Definindo a largura dos cards para 90% da tela
  },
  image: {
    width: '100%', // Imagem cobre quase todo o card
    height: 150, // Altura da imagem
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Para posicionar texto e preço
    width: '100%', // Para que ocupe a largura total
    paddingHorizontal: 10, // Espaçamento lateral
    marginTop: 2, // Espaçamento acima do texto
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff',
    padding: 6, // Espaçamento interno
  },
  price: {
    fontSize: 14,
    color: '#fff',
    padding: 6, // Espaçamento interno
  },
});

export default ServicosRecomendados;
