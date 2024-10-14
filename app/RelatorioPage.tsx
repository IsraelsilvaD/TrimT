import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const RelatorioPage = () => {
  const [tipoRelatorio, setTipoRelatorio] = useState('comissoes');
  const [relatorio, setRelatorio] = useState('');

  const gerarRelatorio = () => {
    if (tipoRelatorio === 'comissoes') {
      setRelatorio('Relatório de Comissões gerado com sucesso!');
    } else {
      setRelatorio('Relatório de Agendamentos gerado com sucesso!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')} // Caminho para a imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Gerenciar Relatórios</Text>

        {/* Opções de relatório */}
        <View style={styles.options}>
          <TouchableOpacity 
            onPress={() => setTipoRelatorio('comissoes')} 
            style={[
              styles.radioButton, 
              tipoRelatorio === 'comissoes' && styles.radioButtonSelected,
            ]}
          >
            <Text style={styles.radioText}>Comissões</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setTipoRelatorio('agendamentos')} 
            style={[
              styles.radioButton, 
              tipoRelatorio === 'agendamentos' && styles.radioButtonSelected,
            ]}
          >
            <Text style={styles.radioText}>Agendamentos</Text>
          </TouchableOpacity>
        </View>

        {/* Botão para gerar o relatório */}
        <Button title="Gerar Relatório" onPress={gerarRelatorio} />

        {/* Exibição do relatório gerado */}
        {relatorio ? (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>Resultado do Relatório</Text>
            <Text style={styles.resultContent}>{relatorio}</Text>
          </View>
        ) : null}
      </View>
    </ImageBackground>
  );
};

export default RelatorioPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela inteira
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco para melhor contraste
  },
  options: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioButton: {
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo com leve transparência
  },
  radioButtonSelected: {
    backgroundColor: '#FFD700', // Cor diferente para opção selecionada
  },
  radioText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  result: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo branco com transparência
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultContent: {
    fontSize: 16,
    marginTop: 10,
  },
});
