import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

import { Link } from 'expo-router';

export default function Homescreen() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
            <Button title="Go Back" onPress={() => router.back()} />
            <Link href="/WorldCupDashboard">Dashboard</Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42
  }
});
