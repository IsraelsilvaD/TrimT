import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';

type AvailableTimes = string[];

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
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

const CalendarioComponent = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<AvailableTimes>([]);

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    setAvailableTimes([
      '2024-10-10T09:00:00', '2024-10-10T10:00:00', '2024-10-10T11:00:00', 
      '2024-10-10T12:00:00', '2024-10-10T14:00:00', '2024-10-10T15:00:00', 
      '2024-10-10T16:00:00', '2024-10-10T17:00:00', '2024-10-10T18:00:00'
    ]);
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')}
      style={styles.background}      
    >
      <View style={styles.content}>
        <View style={styles.calendarContainer}>
          <Text style={styles.monthView}>Calendário</Text>
          <Calendar
            onDayPress={(day: { dateString: string }) => handleSelectDate(day.dateString)}
            markedDates={{ [selectedDate || '']: { selected: true, selectedColor: '#FFD700' } }}
            style={styles.calendar}
            theme={{
              calendarBackground: '#141109',
              textSectionTitleColor: '#FFFFFF',
              dayTextColor: '#ffffff',
              selectedDayBackgroundColor: '#FFD700',
              selectedDayTextColor: '#000000',
              todayTextColor: '#FFFFFF',
              arrowColor: '#FFFFFF',
              monthTextColor: '#FFFFFF',
              indicatorColor: '#FFD700',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 14
            }}
          />
          {selectedDate && (
            <>
              <Text style={styles.timeSlotHeader}>
                Horários disponíveis para {moment(selectedDate).format('LL')}
              </Text>
              <ScrollView style={styles.scrollView} horizontal>
                {availableTimes.map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeSlotButton,
                      selectedTime === time && styles.selectedTimeSlot
                    ]}
                    onPress={() => handleSelectTime(time)}
                  >
                    <Text style={styles.timeText}>{moment(time).format('HH:mm')}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                  <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta a imagem para cobrir o fundo
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  calendarContainer: {
    width: '100%',
    backgroundColor: '#141109',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  monthView: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  calendar: {
    width: '100%',
    height: 350,
  },
  timeSlots: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  timeSlotHeader: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  scrollView: {
    maxHeight: 100,
    paddingHorizontal: 10,
  },
  timeSlotButton: {
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    marginHorizontal: 5,
    backgroundColor: '#2c2c2c',
    color: 'white',
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#FFD700',
  },
  timeText: {
    color: 'white',
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default CalendarioComponent;
