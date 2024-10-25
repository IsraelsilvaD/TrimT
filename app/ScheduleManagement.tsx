import React, { useState } from 'react';
import { View, Text, Button, Alert, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, name: 'João Silva', service: 'Corte de Cabelo', date: '2024-10-15', time: '14:00' },
    { id: 2, name: 'Maria Oliveira', service: 'Barba', date: '2024-10-16', time: '15:30' },
  ]);

  const handleCancelSchedule = (id: number) => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja cancelar este agendamento?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => setSchedules(schedules.filter((schedule) => schedule.id !== id)),
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')} // Caminho da imagem de fundo
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Gerenciar Agendamentos da Barbearia</Text>

        {schedules.length > 0 ? (
          <View style={styles.scheduleList}>
            {schedules.map((schedule) => (
              <View style={styles.scheduleBlock} key={schedule.id}>
                <View style={styles.scheduleInfo}>
                  <Text style={styles.scheduleName}>{schedule.name}</Text>
                  <Text style={styles.scheduleDetail}>
                    {schedule.service} em {schedule.date} às {schedule.time}
                  </Text>
                </View>
                <Button
                  title="Cancelar"
                  color="#e74c3c"
                  onPress={() => handleCancelSchedule(schedule.id)}
                />
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noSchedules}>Nenhum agendamento encontrado.</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default ScheduleManagement;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
},
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start', // Alinhamento para o início da tela
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff', // Texto branco para contraste com a imagem
    marginTop: 10, // Ajuste do espaço acima do título
  },
  scheduleList: {
    width: '100%',
  },
  scheduleBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo com opacidade
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scheduleInfo: {
    marginBottom: 10,
  },
  scheduleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
  },
  scheduleDetail: {
    color: '#fff', // Texto branco para os detalhes do agendamento
  },
  noSchedules: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
});
