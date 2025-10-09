import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to tabs after login
  return <Redirect href={'/(tabs)' as any} />;
}
