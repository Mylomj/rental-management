import { Button, Text, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Log in (enter app)" onPress={() => navigation.replace('Main')} />
      <Button title="Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
