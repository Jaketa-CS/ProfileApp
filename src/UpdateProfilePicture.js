import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UpdateProfilePicture = ({ route, navigation }) => {
  const [file, setFile] = useState(route.params?.newProfilePicture || null);

  useEffect(() => {
    if (route.params?.newProfilePicture) {
      setFile(route.params.newProfilePicture);
    }
  }, [route.params?.newProfilePicture]);

  const forceUpdate = React.useReducer(() => ({}))[1];

  const pickImage = async () => {
    setFile(null); // Reset file to null to force a re-render

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setFile(result.uri);
      forceUpdate(); // Force re-render
    }
  };

  const handleUpdate = () => {
    route.params.handleProfilePictureUpdate(file);
    navigation.goBack();
  };

  const handleRedirect = () => {
    if (file) {
      navigation.navigate('App', { newImageURI: file });
    } else {
      navigation.navigate('App', { newImageURI: file });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Image:</Text>

      <TouchableOpacity style={styles.fileInputContainer} onPress={pickImage}>
        {file ? (
          <Image source={{ uri: file }} style={styles.image} />
        ) : (
          <Text style={styles.fileInputLabel}>Choose Image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.redirectButton} onPress={handleRedirect}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  fileInputContainer: {
    marginBottom: 16,
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  fileInputLabel: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  redirectButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateProfilePicture;
