import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <View style={styles.navbar}>
      <Link href="/SquadPage" style={styles.link}>
        <Text style={styles.linkText}>Squad Page</Text>
      </Link>
      <Text style={styles.logo} onPress={() => router.push("/")}>
        E8
      </Text>
      <TextInput
        placeholder="Search here..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
        placeholderTextColor="#fff"
        onSubmitEditing={handleSearch}
      />
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

const statCards = [
  { label: "Goals", value: "--" },
  { label: "Yellow Cards", value: "--" },
  { label: "Goals Conceded", value: "--" },
  { label: "Assists", value: "--" },
  { label: "Fouls", value: "--" },
];

const TeamStatsDetailsPage = () => {
  const { code } = useLocalSearchParams(); // Get the team code from the URL

  // Fetch stats for the team using the code if needed
  const teamName = code ? code.toUpperCase() : "Team Name";

  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.teamName}>{teamName}</Text>
        <ScrollView contentContainerStyle={styles.statsGrid}>
          {statCards.map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  searchInput: {
    flex: 1,
    backgroundColor: "#6c7bb0",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 18,
    color: "#fff",
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
    maxWidth: 1200,
    marginHorizontal: "auto",
    paddingTop: 36,
    alignItems: "center",
  },
  teamName: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 36,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  statCard: {
    backgroundColor: "#0b0e33",
    borderRadius: 20,
    minHeight: 180,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
  },
  statLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  statValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 12,
  },
});

export default TeamStatsDetailsPage;