import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Importando o Link do expo-router

const { width } = Dimensions.get('window'); // Detecta a largura da tela

const App = () => {
    return (
        <ImageBackground
            source={require('../assets/images/imgFundo.jpeg')} // Mantenha a imagem de fundo
            style={styles.background}
        >
            <SafeAreaView style={styles.safeArea}>
                {/* Parte fixa - Título e Header */}
                <View style={styles.fixedHeader}>
                    <Text style={styles.title}>Painel do Administrador</Text>
                </View>

                {/* Parte rolável - Cards */}
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Administrador />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

const Administrador = () => {
    return (
        <View style={styles.adminContent}>
            <View style={styles.adminOptions}>
                <OptionCard icon="user" title="Gerenciar Usuários" link="/userManagement" />
                <OptionCard icon="calendar" title="Gerenciar Agendamentos" link="/ScheduleManagement"/>
                <OptionCard icon="cogs" title="Gerenciar Relatórios" link="/RelatorioPage"/>
            </View>
        </View>
    );
};

interface OptionCardProps {
    icon: keyof typeof FontAwesome.glyphMap;
    title: string;
    link?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, title, link }) => {
    return (
        <View style={styles.optionCard}>
            {link ? (
                <Link href={link as any} style={styles.optionLink}>
                    <View style={styles.cardContent}>
                        <FontAwesome name={icon} size={48} color="#FFD700" />
                        <Text style={styles.optionTitle}>{title}</Text>
                    </View>
                </Link>
            ) : (
                <View style={styles.optionLink}>
                    <View style={styles.cardContent}>
                        <FontAwesome name={icon} size={48} color="#FFD700" />
                        <Text style={styles.optionTitle}>{title}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    fixedHeader: {
        paddingTop: 50, // Mantém o título no topo
        paddingBottom: 20, // Espaçamento abaixo do título        
        width: '100%',
        alignItems: 'center',
        zIndex: 2, // Garante que o título fique sobre o conteúdo rolável
    },
    title: {
        fontSize: width < 360 ? 22 : 28, // Ajusta o tamanho do título conforme a tela
        color: 'rgba(255, 255, 255, 0.9)', // Cor com leve transparência
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 2, // Espaçamento entre as letras
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra preta com transparência
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 3, // Suaviza a sombra
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 10, // Margem lateral
        paddingTop: 20, // Espaçamento entre o header e os cards
    },
    adminContent: {
        alignItems: 'center',
        zIndex: 1,
    },
    adminOptions: {
        flexDirection: 'column', // Alinha os cards em uma coluna
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    optionCard: {
        backgroundColor: '#141109',
        borderRadius: 10,
        width: '90%', // Cards ocupando 90% da tela
        height: 150, // Altura fixa
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, // Espaçamento entre os cards
    },
    optionLink: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    cardContent: {
        flexDirection: 'row', // Alinha ícone e texto horizontalmente
        alignItems: 'center', // Centraliza verticalmente
    },
    optionTitle: {
        fontSize: width < 360 ? 14 : 18, // Ajusta o tamanho do texto
        color: '#ffffff',
        marginLeft: 15, // Distância horizontal entre o ícone e o texto
    },
});

export default App;
