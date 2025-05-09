import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <View style={styles.navbar}>
      <Link href="/MostPassesPage" style={styles.link}>
        <Text style={styles.linkText}>Most Passes Page</Text>
      </Link>
      <Text style={styles.logo} onPress={() => router.push("/")}>
        E8
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navBtns}>
        <TouchableOpacity onPress={() => router.push("/")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/fixtures")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Fixtures</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/standings")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Standings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/team-stats")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Team Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const statButtons = [
  { label: "Most Goals", route: "/player-stats/goals" },
  { label: "Most Assists", route: "/player-stats/assists" },
  { label: "Most Passes", route: "/player-stats/passes" },
  { label: "Most Saves", route: "/player-stats/saves" },
  { label: "Most Crosses", route: "/player-stats/crosses" },
];

const PlayerStatsPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {statButtons.map((button) => (
            <TouchableOpacity
              key={button.label}
              style={styles.statCard}
              onPress={() => router.push(button.route)}
            >
              <Text style={styles.statCardText}>{button.label}</Text>
            </TouchableOpacity>
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
    backgroundColor: "#5b6183",
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
  navBtn: {
    marginHorizontal: 8,
  },
  navBtnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
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
  statCard: {
    backgroundColor: "#131847",
    borderRadius: 18,
    minHeight: 260,
    minWidth: 320,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
  },
  statCardText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "400",
  },
});

export default PlayerStatsPage;