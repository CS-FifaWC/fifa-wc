import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const crossesData = [
  { name: "Piotr Zielinski", flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.png", crosses: 14 },
  { name: "Angel Di Maria", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.png", crosses: 29 },
  { name: "Kevin De Bruyne", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.png", crosses: 18 },
  { name: "Antoine Griezmann", flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.png", crosses: 42 },
  { name: "Hakim Ziyech", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.png", crosses: 33 },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Link href="/MostSavesPage" style={styles.link}>
        <Text style={styles.linkText}>Most Saves Page</Text>
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

const MostCrossesPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>MOST CROSSES</Text>
        <View style={styles.grid}>
          {crossesData.map((player, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.playerName}>{player.name}</Text>
                <Image source={{ uri: player.flag }} style={styles.flag} />
              </View>
              <Text style={styles.crossesCount}>{player.crosses}</Text>
              <Text style={styles.crossesLabel}>Most Crosses</Text>
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
  crossesCount: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  crossesLabel: {
    fontSize: 18,
    color: "#bfc6d1",
  },
});

export default MostCrossesPage;