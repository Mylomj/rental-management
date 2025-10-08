import { Redirect } from 'expo-router';

export default function Index() {
  // Temporary: always redirect to login for testing
  return <Redirect href="/login" />;
}
