import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    Alert.alert('Success', `Logged in as ${email}!`);
    navigation.navigate('Data');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <Button mode="contained" onPress={handleLogin} style={styles.button} labelStyle={styles.buttonText}>
          Login
        </Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
  linkText: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default LoginScreen;