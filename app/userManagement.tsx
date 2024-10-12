import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, ImageBackground } from 'react-native';

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
  const [userRole, setUserRole] = useState<'Cliente' | 'Colaborador'>('Cliente'); // Estado para o papel do usuário
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Usuário 1', phone: '1234-5678', email: 'usuario1@example.com', role: 'Cliente' },
    { id: 2, name: 'Usuário 2', phone: '9876-5432', email: 'usuario2@example.com', role: 'Colaborador' },
  ]); // Lista de usuários
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null); // ID do usuário selecionado para edição
  const [activeEditUserId, setActiveEditUserId] = useState<number | null>(null); // ID do usuário que está sendo editado

  const openModal = (user: User) => {
    setUserRole(user.role); // Define o papel do usuário ao abrir o modal
    setSelectedUserId(user.id);
    setModalVisible(true);
  };

  const handleUpdateUser = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId
          ? { ...user, role: userRole } // Atualiza apenas o papel do usuário
          : user
      )
    );
    setModalVisible(false);
    setUserRole('Cliente'); // Reseta o papel do usuário
    setSelectedUserId(null); // Reseta o usuário selecionado
    setActiveEditUserId(null); // Reseta o usuário ativo
  };

  const handleEditButtonPress = (userId: number) => {
    setActiveEditUserId(userId);
  };

  return (
    <ImageBackground
      source={require('../assets/images/imgFundo.jpeg')} // Defina o caminho correto da imagem
      style={styles.background}
    >
      <View style={styles.userManagement}>
        <Text style={styles.headerText}>Gerenciamento de Usuários</Text>
        <ScrollView style={styles.userListFixed}>
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
                    style={[
                      styles.editUserButton,
                      activeEditUserId === user.id ? styles.editButtonActive : null,
                    ]}
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
                    <Text style={styles.roleButtonText}>{role}</Text> {/* Corrigindo o erro de nome de propriedade */}
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
      </View>
    </ImageBackground>
  );
};

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userManagement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white', // Mudança para destacar o texto no fundo
  },
  userListFixed: {
    marginTop: 20,
    maxWidth: 800,
    maxHeight: '80%', // Altura fixa para a lista
    borderRadius: 5,
    backgroundColor: 'rgba(80, 80, 80, 0.8)', // Cor sólida escura
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    padding: 15,
  },
  userList: {
    maxWidth: 300,
    margin: 0,
    maxHeight: 300,
  },
  userListItem: {
    marginBottom: 20, // Aumenta o espaçamento entre os itens da lista
    flexDirection: 'column', // Muda a direção para coluna
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Alinha à esquerda
  },
  userInfoBlock: {
    marginBottom: 10, // Aumenta o espaçamento entre o bloco de informações e os botões
  },
  userName: {
    fontSize: 18, // Aumenta o tamanho da fonte do nome do usuário
    fontWeight: 'bold', // Aumenta a espessura da fonte
    color: 'white', // Cor do texto
    marginBottom: 5, // Aumenta o espaçamento entre o nome e os detalhes
  },
  userDetail: {
    fontSize: 16, // Tamanho da fonte para detalhes
    color: 'white', // Cor do texto
    marginBottom: 5, // Espaçamento entre os detalhes
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 5,
  },
  editUserButton: {
    backgroundColor: 'white', // Cor do botão "Editar"
    paddingVertical: 10, // Diminuindo um pouco a altura
    paddingHorizontal: 20, // Mantendo o botão grande
    borderRadius: 5,
  },
  editUserButtonText: {
    color: 'black', // Texto preto
    fontSize: 16, // Aumenta o tamanho do texto
  },
  editButtonActive: {
    backgroundColor: '#FFD700', // Cor do botão "Editar" quando ativo
  },
  deleteUserButton: {
    backgroundColor: 'red',
    paddingVertical: 10, // Diminuindo um pouco a altura
    paddingHorizontal: 20, // Mantendo o botão grande
    borderRadius: 5,
  },
  deleteUserButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  modalInfoBlock: {
    width: '100%', // Largura total do bloco
    marginBottom: 15, // Espaçamento inferior
  },
  modalText: {
    fontSize: 16, // Tamanho do texto no modal
    marginBottom: 5, // Espaçamento entre os textos
  },
  roleLabel: {
    marginBottom: 5, // Espaçamento inferior
    fontSize: 16, // Aumenta o tamanho do texto
  },
  roleOptions: {
    flexDirection: 'column', // Disposição vertical para os círculos de papel
    justifyContent: 'flex-start', // Alinhamento no início
    width: '100%', // Largura total do bloco
    marginBottom: 10, // Espaçamento inferior
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Espaçamento entre opções
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10, // Para torná-lo um círculo
    borderColor: '#000',
    borderWidth: 2,
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: '#FFD700', // Cor do círculo selecionado
  },
  modalButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UserManagement;
