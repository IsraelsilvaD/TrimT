import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Importa o hook useRouter

// Importa o ícone usando require
const Icon = require('react-native-vector-icons/Ionicons').default;

const TelaDeRegistro = () => {
    const router = useRouter(); // Inicializa o roteador
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!nome || !telefone || !email || !senha) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }

        setIsSubmitting(true);
        console.log({ nome, telefone, email, senha });
        setModalVisible(true);  // Exibe o modal ao enviar os dados

        // Após o registro, navegue de volta para a tela de login
        setTimeout(() => {
            router.push('/TelaDeLogin'); // Navega de volta para a tela de login
        }, 2000); // Espera 2 segundos para mostrar o modal
    };

    const handleCancel = () => {
        Alert.alert('Cancelado', 'Registro cancelado.');
        router.push('/TelaDeLogin'); // Navega de volta para a tela de login
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <ImageBackground 
            source={require('../assets/images/imgFundo.jpeg')} 
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>

                {/* Campo Nome */}
                <View style={styles.inputBox}>
                    <Icon name="person-outline" size={20} color="white" />
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#ccc"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                {/* Campo Telefone */}
                <View style={styles.inputBox}>
                    <Icon name="call-outline" size={20} color="white" />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        placeholderTextColor="#ccc"
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                    />
                </View>

                {/* Campo Email */}
                <View style={styles.inputBox}>
                    <Icon name="mail-outline" size={20} color="white" />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#ccc"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                {/* Campo Senha */}
                <View style={styles.inputBox}>
                    <Icon name="lock-closed-outline" size={20} color="white" />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#ccc"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                </View>

                {/* Botões de Enviar e Cancelar */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.button, styles.buttonSend]} 
                        onPress={handleSubmit}
                        onPressIn={() => setIsSubmitting(true)} 
                        onPressOut={() => setIsSubmitting(false)}
                    >
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.buttonCancel]} 
                        onPress={handleCancel}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

                {/* Modal Flutuante */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Sucesso!</Text>
                            <Text style={styles.modalText}>Registro concluído com sucesso.</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
        maxWidth: 400,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white', // Cor branca para o título
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'white', // Cor branca para a linha inferior do input
        width: '100%',
    },
    input: {
        flex: 1,
        padding: 10,
        color: 'white', // Cor branca para o texto do input
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSend: {
        backgroundColor: 'white',
    },
    buttonCancel: {
        backgroundColor: 'red',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black', // Cor do texto dentro dos botões
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black', // Cor do título do modal
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        color: 'black', // Cor do texto do modal
    },
    closeButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white', // Cor branca para o texto do botão "Fechar"
        fontWeight: 'bold',
    },
});

export default TelaDeRegistro;
