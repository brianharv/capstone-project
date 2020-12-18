import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Login Screen</Text>
      <Button title="View Messages" onPress={() => {
        props.navigation.navigate('Messages')
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
});

export default Login;