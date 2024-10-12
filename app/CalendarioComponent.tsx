import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars'; // Importando o componente de calendário
import moment from 'moment';

// Definindo um tipo para os horários disponíveis
type AvailableTimes = string[];

// Configurando o calendário para exibir os meses e dias em português
LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt';

const CalendarioComponent = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<AvailableTimes>([]);

  // Simular horários disponíveis para a data selecionada
  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    setAvailableTimes(['2024-10-10T09:00:00','2024-10-10T10:00:00', '2024-10-10T11:00:00', '2024-10-10T12:00:00','2024-10-10T14:00:00','2024-10-10T15:00:00','2024-10-10T16:00:00','2024-10-10T17:00:00','2024-10-10T18:00:00']);
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time === selectedTime ? null : time); // Alterna a seleção da hora
  };

  return (
    <ImageBackground 
      source={require('../assets/images/imgFundo.jpeg')} // Substitua pelo caminho da sua imagem
      style={styles.background}
    >
      <View style={styles.content}>
        <View style={styles.calendarContainer}>
          <Text style={styles.monthView}>Calendário</Text>
          <Calendar
            onDayPress={(day: { dateString: string }) => handleSelectDate(day.dateString)} // Definindo o tipo do parâmetro day
            markedDates={{
              [selectedDate || '']: { selected: true, selectedColor: '#FFD700' }, // Usando selectedDate com fallback para string vazia
            }}
            style={styles.calendar}
          />
        </View>

        {selectedDate && (
          <View style={styles.timeSlots}>
            <Text style={styles.timeSlotButton}>
              Horários disponíveis para {moment(selectedDate).format('LL')}
            </Text>
            <ScrollView style={styles.scrollView}>
              {availableTimes.map((time, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={[
                    styles.timeSlotButton,
                    selectedTime === time && styles.selectedTimeSlot // Aplica estilo se a hora estiver selecionada
                  ]}
                  onPress={() => handleSelectTime(time)} // Seleciona a hora ao clicar
                >
                  <Text style={styles.timeText}>{moment(time).format('HH:mm')}</Text> {/* Aplicando estilo ao texto da hora */}
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Botões de Agendar e Cancelar */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={{ color: 'white' }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton}>
                <Text style={{ color: 'white' }}>Agendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

// Estilos adaptados para React Native
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir o fundo
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 20,
    width: '100%',
    marginLeft: 50,
    justifyContent: 'flex-start',
  },
  calendarContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo cinza transparente
    padding: 20,
    marginRight: 50, // Desloca o calendário para a direita
  },
  monthView: {
    backgroundColor: '#2c2c2c',
    color: 'white',
    padding: 10,
  },
  calendar: {
    width: '100%',
    height: 350, // Ajuste a altura conforme necessário
  },
  timeSlots: {
    flex: 1,
    borderRadius: 4,
    marginTop: 20,
  },
  scrollView: {
    maxHeight: 200, // Define a altura máxima para a barra de rolagem
  },
  timeSlotButton: {
    flex: 1,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    marginRight: 5,
    backgroundColor: '#2c2c2c',
    color: 'white',
  },
  selectedTimeSlot: {
    backgroundColor: '#FFD700', // Cor amarela quando selecionado
  },
  timeText: {
    color: 'white', // Texto da hora em branco
    textAlign: 'center', // Centraliza o texto
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 4,
    marginRight: 5,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 4,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default CalendarioComponent;
