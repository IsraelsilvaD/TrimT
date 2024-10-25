import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Detecta a largura da tela

// Tipo para usuários
interface User {
  id: number;
  name: string;
  phone: string; // Adicionando campo de telefone
  email: string; // Adicionando campo de email
  role: 'Cliente' | 'Colaborador'; // Adicionando papel do usuário
}

// Componente de gerenciamento de usuários
const UserManagement = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userRole, setUserRole] = useState<'Cliente' | 'Colaborador'>('Cliente');
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Usuário 1', phone: '1234-5678', email: 'usuario1@example.com', role: 'Cliente' },
    { id: 2, name: 'Usuário 2', phone: '9876-5432', email: 'usuario2@example.com', role: 'Colaborador' },
  ]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [activeEditUserId, setActiveEditUserId] = useState<number | null>(null);

  const openModal = (user: User) => {
    setUserRole(user.role);
    setSelectedUserId(user.id);
    setModalVisible(true);
  };

  const handleUpdateUser = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId ? { ...user, role: userRole } : user
      )
    );
    setModalVisible(false);
    setUserRole('Cliente');
    setSelectedUserId(null);
    setActiveEditUserId(null);
  };

  const handleEditButtonPress = (userId: number) => {
    setActiveEditUserId(userId);
  };

  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.fixedHeader}>
          <Text style={styles.title}>Gerenciamento de Usuários</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.userList}>
            {users.map((user) => (
              <View key={user.id} style={styles.userListItem}>
                <View style={styles.userInfoBlock}>
                  <Text style={styles.userName}>Nome: {user.name}</Text>
                  <Text style={styles.userDetail}>Telefone: {user.phone}</Text>
                  <Text style={styles.userDetail}>Email: {user.email}</Text>
                  <Text style={styles.userDetail}>Papel: {user.role}</Text>
                </View>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={[styles.editUserButton, activeEditUserId === user.id ? styles.editButtonActive : null]}
                    onPress={() => {
                      openModal(user);
                      handleEditButtonPress(user.id);
                    }}
                  >
                    <Text style={styles.editUserButtonText}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteUserButton}>
                    <Text style={styles.deleteUserButtonText}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Modal de Edição */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Editar Usuário</Text>
              <View style={styles.modalInfoBlock}>
                <Text style={styles.modalText}>Nome: {users.find(user => user.id === selectedUserId)?.name}</Text>
                <Text style={styles.modalText}>Telefone: {users.find(user => user.id === selectedUserId)?.phone}</Text>
                <Text style={styles.modalText}>Email: {users.find(user => user.id === selectedUserId)?.email}</Text>
              </View>
              <Text style={styles.roleLabel}>Papel do Usuário:</Text>
              <View style={styles.roleOptions}>
                {['Cliente', 'Colaborador'].map((role) => (
                  <TouchableOpacity
                    key={role}
                    style={styles.roleOption}
                    onPress={() => setUserRole(role as 'Cliente' | 'Colaborador')}
                  >
                    <View style={[styles.radioCircle, userRole === role ? styles.selectedCircle : null]} />
                    <Text style={styles.roleButtonText}>{role}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity style={styles.modalButton} onPress={handleUpdateUser}>
                <Text style={styles.modalButtonText}>Atualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
};

// Estilos
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
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontSize: width < 360 ? 22 : 28,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  userList: {
    margin: 0,
    alignItems: 'center', // Centraliza os cards
  },
  userListItem: {
    width: '70%', // Ajuste a largura do card aqui
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 15,
  },
  userInfoBlock: {
    marginBottom: 10,
  },
  userName: {
    fontSize: width < 360 ? 16 : 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userDetail: {
    fontSize: width < 360 ? 14 : 16,
    color: '#fff',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editUserButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 5,
  },
  editUserButtonText: {
    color: 'black',
    fontSize: 16,
  },
  editButtonActive: {
    backgroundColor: '#FFD700',
  },
  deleteUserButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteUserButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalInfoBlock: {
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
  },
  roleLabel: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  roleOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: 'black',
  },
  roleButtonText: {
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: 'gray',
    marginTop: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default UserManagement;
