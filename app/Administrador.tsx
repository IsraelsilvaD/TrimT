import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Mantendo a estrutura de Administrador
const Administrador = () => {
    return (
        <View style={styles.adminContent}>
            <Text style={styles.title}>Painel do Administrador</Text>
            <View style={styles.adminOptions}>
                {/* Substituindo "users-cog" por "user-cog" */}
                <OptionCard icon="user-cog" title="Gerenciar Usuários" />
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
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, title }) => {
    return (
        <TouchableOpacity style={styles.optionCard}>
            <FontAwesome name={icon} size={48} color="#FFD700" />
            <Text style={styles.optionTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

// Componente principal
const App = () => {
    return (
        <ImageBackground
            source={require('./imagens/imgFundo.jpg')}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <Administrador />
            </SafeAreaView>
        </ImageBackground>
    );
};

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
        left: '50%',
        transform: [{ translateX: -50 }],
        color: 'white',
        textAlign: 'center',
        zIndex: 2,
    },
    title: {
        fontSize: 36,
        marginBottom: 30,
        color: 'white',
    },
    adminOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    optionCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 10,
        width: 200,
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    optionTitle: {
        fontSize: 18,
        color: '#ffffff',
    },
});

export default App;
