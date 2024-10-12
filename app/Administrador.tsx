import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Importando o Link do expo-router

// Componente principal
const App = () => {
    return (
        <ImageBackground
            source={require('../assets/images/imgFundo.jpeg')} // Mantenha a imagem de fundo
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <Administrador />
            </SafeAreaView>
        </ImageBackground>
    );
};

// Mantendo a estrutura de Administrador
const Administrador = () => {
    return (
        <View style={styles.adminContent}>
            <View style={styles.header}>
                <Text style={styles.title}>Painel do Administrador</Text>
            </View>
            <View style={styles.adminOptions}>
                {/* Substituindo "TouchableOpacity" por "Link" para navegação */}
                <OptionCard icon="user" title="Gerenciar Usuários" link="/userManagement" />
                <OptionCard icon="calendar" title="Gerenciar Agendamentos" />
                <OptionCard icon="cogs" title="Gerenciar Relatórios" />
            </View>
        </View>
    );
};

// Componente para os cards de opções
interface OptionCardProps {
    icon: keyof typeof FontAwesome.glyphMap; // Usando o conjunto de ícones do FontAwesome
    title: string;
    link?: string; // Link opcional para navegação
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, title, link }) => {
    return (
        <View style={styles.optionCard}>
            {link ? (
                <Link href={'/userManagement'} style={styles.optionLink}>
                    <FontAwesome name={icon} size={48} color="#FFD700" />
                    <Text style={styles.optionTitle}>{title}</Text>
                </Link>
            ) : (
                <View style={styles.optionLink}>
                    <FontAwesome name={icon} size={48} color="#FFD700" />
                    <Text style={styles.optionTitle}>{title}</Text>
                </View>
            )}
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adminContent: {
        position: 'absolute',
        top: 120,
        alignItems: 'center', // Centraliza os itens horizontalmente
        zIndex: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, // Espaçamento abaixo do título
    },
    title: {
        fontSize: 36,
        color: 'white',
        textAlign: 'center',
    },
    adminOptions: {
        flexDirection: 'row',
        justifyContent: 'center', // Centraliza as opções
        flexWrap: 'wrap',
        alignItems: 'center', // Alinha os itens ao centro
    },
    optionCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10,
        width: 150, // Diminuindo a largura do card para centralizar melhor
        height: 150, // Diminuindo a altura do card para centralizar melhor
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    optionLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    optionTitle: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 10, // Adiciona um espaçamento entre o ícone e o texto
    },
});

export default App;
