import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

// Example data, replace with API data as needed
const fixtureStats = {
  team1: {
    name: "TEAM NAME",
    logo: "🛡", // Replace with actual logo or emoji
    stats: [0, 7, 6, 12, 1, 7, 5, 12, 47],
  },
  team2: {
    name: "TEAM NAME",
    logo: "🛡", // Replace with actual logo or emoji
    stats: [0, 2, 10, 9, 12, 1, 5, 4, 53],
  },
  score1: 0,
  score2: 0,
  time: "90:00",
  statsLabels: [
    "Goals",
    "Shot on Target",
    "Total Shots",
    "Fouls",
    "Booking",
    "Tackles",
    "Offsides",
    "Corners",
    "Ball Possession, %",
  ],
};

const FixtureStatisticsPage = () => {
  const router = useRouter(); // Use router for navigation

  // In a real app, fetch stats using the fixture ID from the route
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.teamBox}>
            <Text style={styles.teamLogo}>{fixtureStats.team1.logo}</Text>
            <Text style={styles.teamName}>{fixtureStats.team1.name}</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.matchTime}>{fixtureStats.time}</Text>
            <Text style={styles.matchScore}>
              {fixtureStats.score1} - {fixtureStats.score2}
            </Text>
            <Text style={styles.statisticsTitle}>STATISTICS</Text>
          </View>
          <View style={styles.teamBox}>
            <Text style={styles.teamLogo}>{fixtureStats.team2.logo}</Text>
            <Text style={styles.teamName}>{fixtureStats.team2.name}</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.statsTable}>
          {fixtureStats.statsLabels.map((label, idx) => (
            <View key={label} style={styles.statsRow}>
              <Text style={styles.teamStat}>{fixtureStats.team1.stats[idx]}</Text>
              <Text style={styles.statLabel}>{label}</Text>
              <Text style={styles.teamStat}>{fixtureStats.team2.stats[idx]}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Link href="/StandingsPage">Standing Page</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1e2b47",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    backgroundColor: "rgba(20, 30, 60, 0.95)",
    borderRadius: 16,
    padding: 24,
    width: "90%",
    maxWidth: 900,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 6 },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  teamBox: {
    flex: 1,
    alignItems: "center",
  },
  teamLogo: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 8,
  },
  teamName: {
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 1,
    color: "#fff",
  },
  scoreBox: {
    flex: 1,
    alignItems: "center",
  },
  matchTime: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#fff",
  },
  matchScore: {
    fontSize: 44,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#fff",
  },
  statisticsTitle: {
    fontWeight: "700",
    fontSize: 26,
    letterSpacing: 1,
    color: "#ffd700",
    marginTop: 8,
  },
  statsTable: {
    marginTop: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 8,
  },
  teamStat: {
    width: "25%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#fff",
  },
  statLabel: {
    width: "50%",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    color: "#ffd700",
  },
});

export default FixtureStatisticsPage;   