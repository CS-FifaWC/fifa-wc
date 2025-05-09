import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const goalsData = [
  { name: "Lionel Messi", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.png", goals: 7 },
  { name: "Kylian Mbappe", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.png", goals: 8 },
  { name: "Marcus Rashford", flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.png", goals: 3 },
  { name: "Andreas Christensen", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.png", goals: 1 },
  { name: "Robert Lewandowski", flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.png", goals: 2 },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Link href="/MostCrossesPage" style={styles.link}>
        <Text style={styles.linkText}>Most Crosses Page</Text>
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

const MostGoalsPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {/* First row: 3 players */}
          {goalsData.slice(0, 3).map((player, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.playerName}>{player.name}</Text>
                <Image source={{ uri: player.flag }} style={styles.flag} />
              </View>
              <Text style={styles.goalsCount}>{player.goals}</Text>
              <Text style={styles.goalsLabel}>Most Goals</Text>
            </View>
          ))}
          {/* Second row: 2 players */}
          {goalsData.slice(3).map((player, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.playerName}>{player.name}</Text>
                <Image source={{ uri: player.flag }} style={styles.flag} />
              </View>
              <Text style={styles.goalsCount}>{player.goals}</Text>
              <Text style={styles.goalsLabel}>Most Goals</Text>
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  card: {
    backgroundColor: "#050c3a",
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
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  playerName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginRight: 8,
  },
  flag: {
    width: 36,
    height: 24,
    borderRadius: 3,
  },
  goalsCount: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  goalsLabel: {
    fontSize: 18,
    color: "#bfc6d1",
  },
});

export default MostGoalsPage;