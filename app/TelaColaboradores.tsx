import React, { useState } from 'react'; 
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

// Definindo o tipo para os barbeiros
type Barber = 'Junior' | 'Pedro' | 'Joao';

// Definindo o tipo para os agendamentos
interface Appointment {
  title: string;
  barber: Barber;
  time: string;
  date: string;
  status: 'Confirmado' | 'Cancelado';
}

const TelaColaboradores = () => {
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  const barbers: Barber[] = ['Junior', 'Pedro', 'Joao'];
  const appointments: Appointment[] = [
    { title: 'Corte de Cabelo', barber: 'Junior', time: '09:15', date: 'Agosto 28', status: 'Confirmado' },
    { title: 'Pezinho', barber: 'Pedro', time: '10:15', date: 'Agosto 28', status: 'Confirmado' },
    { title: 'Barba', barber: 'Joao', time: '11:15', date: 'Agosto 28', status: 'Confirmado' },
    { title: 'Corte de Cabelo', barber: 'Junior', time: '12:15', date: 'Agosto 28', status: 'Cancelado' },
  ];

  const handleBarberClick = (barber: Barber) => setSelectedBarber(barber);

  const filteredAppointments = selectedBarber
    ? appointments.filter((appointment) => appointment.barber === selectedBarber)
    : appointments;

  const getImagePath = (barber: Barber) => {
    const images: { [key in Barber]: any } = {
      Junior: require('../assets/images/profissional 1.jpg'),
      Pedro: require('../assets/images/profissional 1.jpg'),
      Joao: require('../assets/images/profissional 1.jpg'),
    };
    return images[barber];
  };

  return (
    <ImageBackground 
      source={require('../assets/images/imgFundo.jpeg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.mainContent}>
        {/* Elementos fixos no topo */}
        <View style={styles.greeting}>
          <Text style={styles.greetingTitle}>Olá, Colaborador!</Text>
          <Text style={styles.greetingDate}>Segunda, 26 de Agosto</Text>
        </View>

        {/* ScrollView apenas para os cards */}
        <ScrollView>
          <View style={styles.barbersContainer}>
            {barbers.map((barber, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.barberCard} 
                onPress={() => handleBarberClick(barber)}
              >
                <Image style={styles.barberPhoto} source={getImagePath(barber)} />
                <Text style={styles.barberName}>{barber}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.appointments}>
            <Text style={styles.appointmentsTitle}>
              Agendamentos {selectedBarber ? `de ${selectedBarber}` : ''}
            </Text>
            <View style={styles.appointmentsContainer}>
              {filteredAppointments.map((appointment, index) => (
                <View key={index} style={styles.card}>
                  <View style={styles.cardInfo}>
                    <View
                      style={[
                        styles.status,
                        appointment.status === 'Confirmado' 
                          ? styles.statusConfirmado 
                          : styles.statusCancelado,
                      ]}
                    >
                      <Text style={styles.statusText}>{appointment.status}</Text>
                    </View>
                    <Text style={styles.appointmentTitle}>{appointment.title}</Text>
                    <View style={styles.barberInfo}>
                      <Image 
                        style={styles.barberPhotoSmall} 
                        source={getImagePath(appointment.barber)} 
                      />
                      <Text style={styles.barberNameSmall}>
                        Barbeiro {appointment.barber}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.cardDateTime}>
                    <Text style={styles.appointmentTime}>{appointment.time}</Text>
                    <Text style={styles.appointmentDate}>{appointment.date}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
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
  mainContent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  greeting: {
    marginBottom: 30,
  },
  greetingTitle: {
    fontSize: 28,
    color: 'white',
  },
  greetingDate: {
    fontSize: 16,
    color: 'white',
  },
  barbersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  barberCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    width: 130,
    padding: 10,
  },
  barberPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  barberName: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
  },
  appointments: {
    marginTop: 20,
  },
  appointmentsTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  appointmentsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    padding: 20,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDateTime: {
    textAlign: 'left',
    marginRight: 15,
  },
  appointmentDate: {
    fontSize: 16,
    color: 'white',
  },
  appointmentTime: {
    fontSize: 16,
    color: 'white',
  },
  cardInfo: {
    color: 'white',
    flex: 1,
  },
  status: {
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  statusConfirmado: {
    backgroundColor: 'green',
  },
  statusCancelado: {
    backgroundColor: 'red',
  },
  statusText: {
    color: 'white',
  },
  appointmentTitle: {
    fontSize: 18,
    color: 'white',
  },
  barberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barberPhotoSmall: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  barberNameSmall: {
    fontSize: 16,
    color: 'white',
  },
});

export default TelaColaboradores;
