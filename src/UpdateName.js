// UpdateName.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UpdateName = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSaveName = () => {
    const { handleEditName } = route.params;
    const fullName = `${firstName} ${lastName}`;
    handleEditName(fullName);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>

      <TextInput
        style={styles.input}
        placeholder='First Name'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder='Last Name'
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleSaveName}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 20,
    width: 250,
  },
  updateButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default UpdateName;
