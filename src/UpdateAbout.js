import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { HeaderBackButton } from '@react-navigation/native';

const UpdateAbout = ({ navigation, route }) => {
  const [aboutText, setAboutText] = useState('');
  const [placeholderOpacity, setPlaceholderOpacity] = useState(1);

  const handleSaveAbout = () => {
    const { handleEditAbout } = route.params;
    handleEditAbout(aboutText);
    navigation.goBack();
  };

  const handleTextInputFocus = () => {
    setPlaceholderOpacity(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of passenger are you?</Text>

      <TextInput
        style={styles.input}
        placeholder='Write a little bit about yourself...'
        placeholderTextColor={`rgba(0, 0, 0, ${placeholderOpacity})`}
        value={aboutText}
        onChangeText={(text) => setAboutText(text)}
        onFocus={handleTextInputFocus}
        multiline
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleSaveAbout}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

UpdateAbout.navigationOptions = ({ navigation }) => ({
  headerShown: true,
  headerLeft: () => (
    <HeaderBackButton
      tintColor='black'
      onPress={() => {
        navigation.goBack();
      }}
    />
  ),
  headerTitle: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 200,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
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

export default UpdateAbout;
