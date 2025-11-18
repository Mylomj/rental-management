import { Redirect } from 'expo-router';

export default function TenantDashRedirect() {
  return <Redirect href={'/(client-tabs)' as any} />;
}