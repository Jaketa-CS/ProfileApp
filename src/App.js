import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UpdateName from './UpdateName';
import UpdatePhone from './UpdatePhone';
import UpdateEmail from './UpdateEmail';
import UpdateAbout from './UpdateAbout';
import UpdateProfilePicture from './UpdateProfilePicture';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = React.useState('Micah Smith');
  const [phone, setPhone] = React.useState('(208)206-5039');
  const [email, setEmail] = React.useState('micahsmith@example.com');
  const [about, setAbout] = React.useState(
    'Hi my name is Mica Smith. I am from Mesa but got to school in Salt Lake City. I make this drive all the time and have plenty...'
  );

  const handleEditName = (newName) => {
    setName(newName);
  };

  const handleEditPhone = (newPhone) => {
    setPhone(newPhone);
  };

  const handleEditEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const handleEditAbout = (newAbout) => {
    setAbout(newAbout);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity
          style={styles.profilePictureButton}
          onPress={() => navigation.navigate('UpdateProfilePicture')}
        >
          <View style={styles.pencilIconContainer}>
            <FontAwesome5 name='pencil-alt' style={styles.pencilIcon} />
          </View>
          <View style={styles.profilePictureContainer}>
            <Image
              source={require('../assets/default-avatar.png')}
              style={styles.profilePicture}
            />
          </View>
        </TouchableOpacity>

        {/* Name section */}
        <View style={styles.nameAndButtonContainer}>
          <Text style={styles.profileTitleText}>Name</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('UpdateName', { handleEditName })
            }
          >
            <View style={styles.itemContainer}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{name}</Text>
              </View>
              <Text style={styles.itemRight}>{' ›'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Phone section */}
        <View style={styles.nameAndButtonContainer}>
          <Text style={styles.profileTitleText}>Phone</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('UpdatePhone', { handleEditPhone })
            }
          >
            <View style={styles.itemContainer}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{phone}</Text>
              </View>
              <Text style={styles.itemRight}>{' ›'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Email section */}
        <View style={styles.nameAndButtonContainer}>
          <Text style={styles.profileTitleText}>Email</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate('UpdateEmail', { handleEditEmail })
            }
          >
            <View style={styles.itemContainer}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{email}</Text>
              </View>
              <Text style={styles.itemRight}>{' ›'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* About section */}
        <View style={styles.nameAndButtonContainer}>
          <Text style={styles.profileTitleText}>Tell us about yourself</Text>
          <TouchableOpacity
            style={[styles.editButton, { height: 70 }]}
            onPress={() =>
              navigation.navigate('UpdateAbout', { handleEditAbout })
            }
          >
            <View style={styles.itemContainer}>
              <View style={styles.itemLeft}>
                <Text
                  style={[styles.itemText, { maxWidth: 500 }]}
                  numberOfLines={2}
                >
                  {about}
                </Text>
              </View>
              <Text style={styles.itemRight}>{' ›'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen
          name='UpdateProfilePicture'
          component={UpdateProfilePicture}
          options={{
            headerShown: true,
            headerTitle: 'Update Profile Picture',
            headerStyle: { borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen
          name='UpdateName'
          component={UpdateName}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen
          name='UpdatePhone'
          component={UpdatePhone}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen
          name='UpdateEmail'
          component={UpdateEmail}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { borderBottomWidth: 0 },
          }}
        />
        <Stack.Screen
          name='UpdateAbout'
          component={UpdateAbout}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { borderBottomWidth: 0 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4CA5FD',
  },
  profileSection: {
    padding: 25,
    margin: 20,
    alignItems: 'center',
  },
  profilePictureButton: {
    marginBottom: 20,
    color: 'black',
    position: 'relative',
  },
  profilePictureContainer: {
    position: 'relative',
    borderRadius: 55,
    overflow: 'hidden',
    borderColor: '#4CA5FD',
    borderWidth: 3,
  },
  profilePicture: {
    width: 110,
    height: 110,
    borderColor: 'white',
    borderWidth: 2,
  },
  pencilIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: 35 }, { translateY: -50 }],
    borderRadius: 15,
    zIndex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  pencilIcon: {
    color: '#4CA5FD',
    fontSize: 17,
  },
  nameAndButtonContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  profileTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#C8CEE3',
  },
  editButton: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    width: 600,
    height: 70,
    borderBottomColor: '#C8CEE3',
    borderBottomWidth: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRight: {
    fontSize: 60,
    color: '#C8CEE3',
  },
});

export default App;
