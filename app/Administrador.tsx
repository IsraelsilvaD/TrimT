import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Importando o Link do expo-router

const { width } = Dimensions.get('window'); // Detecta a largura da tela

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

const Administrador = () => {
    return (
        <View style={styles.adminContent}>
            <View style={styles.header}>
                <Text style={styles.title}>Painel do Administrador</Text>
            </View>
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
                <Link href={link} style={styles.optionLink}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 10, // Adiciona margem lateral para telas menores
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adminContent: {
        marginTop: 100, // Ajusta o topo para caber bem em telas menores
        alignItems: 'center',
        zIndex: 2,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: width < 360 ? 28 : 36, // Ajusta o tamanho do título conforme a largura da tela
        color: 'white',
        textAlign: 'center',
    },
    adminOptions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Garante que ocupe toda a largura disponível
    },
    optionCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10,
        width: width / 2.5, // Ajusta a largura dos cards de forma proporcional
        height: width / 2.5, // Mantém o formato quadrado
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    optionLink: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    optionTitle: {
        fontSize: width < 360 ? 14 : 18, // Ajusta o tamanho do texto conforme a tela
        color: '#ffffff',
        marginTop: 10,
    },
});

export default App;
