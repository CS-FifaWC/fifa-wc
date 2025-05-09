import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const assistsData = [
  { name: "Lionel Messi", country: "Argentina", flag: "🇦🇷", assists: 3 },
  { name: "Antoine Griezmann", country: "France", flag: "🇫🇷", assists: 3 },
  { name: "Bernardo Silva", country: "Portugal", flag: "🇵🇹", assists: 3 },
  { name: "Harry Kane", country: "England", flag: "🏴", assists: 3 },
  { name: "Hakim Ziyech", country: "Morocco", flag: "🇲🇦", assists: 1 },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Link href="/MostGoalsPage" style={styles.link}>
        <Text style={styles.linkText}>Most Goals Page</Text>
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

const MostAssistsPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.headerText}>MOST ASSISTS</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {/* Top 3 players */}
          {assistsData.slice(0, 3).map((player, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.playerName}>
                {player.name} <Text style={styles.flag}>{player.flag}</Text>
              </Text>
              <Text style={styles.assistsCount}>{player.assists}</Text>
              <Text style={styles.assistsLabel}>Most Assists</Text>
            </View>
          ))}
          {/* Next 2 players */}
          {assistsData.slice(3).map((player, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.playerName}>
                {player.name} <Text style={styles.flag}>{player.flag}</Text>
              </Text>
              <Text style={styles.assistsCount}>{player.assists}</Text>
              <Text style={styles.assistsLabel}>Most Assists</Text>
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
  header: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  headerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "500",
  },
  container: {
    padding: 16,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  card: {
    backgroundColor: "#10194a",
    borderRadius: 12,
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
  assistsCount: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  assistsLabel: {
    fontSize: 16,
    color: "#bfc6d1",
  },
});

export default MostAssistsPage;