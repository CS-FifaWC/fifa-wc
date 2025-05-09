import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const savesData = [
  { name: "Dominik Livakovic", flag: "🇭🇷", saves: 25 },
  { name: "Wojciech Szczesny", flag: "🇵🇱", saves: 23 },
  { name: "Andries Noppert", flag: "🇳🇱", saves: 18 },
  { name: "Hugo Lloris", flag: "🇫🇷", saves: 17 },
  { name: "Mat Ryan", flag: "🇦🇺", saves: 12 },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Link href="/SettingsPage" style={styles.link}>
        <Text style={styles.linkText}>Settings Page</Text>
      </Link>
      <Text style={styles.logo} onPress={() => router.push("/")}>
        E8
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navBtns}>
        <Text style={styles.navBtnText} onPress={() => router.push("/")}>
          Home
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/fixtures")}>
          Fixtures
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/standings")}>
          Standings
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/team-stats")}>
          Team Stats
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/settings")}>
          Settings
        </Text>
      </ScrollView>
    </View>
  );
};

const MostSavesPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>MOST SAVES</Text>
        <View style={styles.grid}>
          {savesData.map((player, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.playerName}>
                {player.name} <Text style={styles.flag}>{player.flag}</Text>
              </Text>
              <Text style={styles.savesCount}>{player.saves}</Text>
              <Text style={styles.savesLabel}>Most Saves</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#6c7ba0",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#49518a",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  logo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 16,
  },
  navBtns: {
    flexDirection: "row",
    alignItems: "center",
  },
  navBtnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    marginHorizontal: 8,
  },
  link: {
    marginRight: 16,
  },
  linkText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
  container: {
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 32,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  card: {
    backgroundColor: "#10194a",
    borderRadius: 18,
    padding: 16,
    width: 240,
    alignItems: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
  },
  playerName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 8,
  },
  flag: {
    fontSize: 22,
  },
  savesCount: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  savesLabel: {
    fontSize: 18,
    color: "#bfc6d1",
  },
});

export default MostSavesPage;