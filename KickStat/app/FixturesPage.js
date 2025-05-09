import React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

// Example fixture data; replace with API data as needed
const fixtures = [
  {
    id: 1,
    date: "Sun, 20 Nov",
    team1: "TEAM 1",
    team2: "TEAM 2",
    score1: 3,
    score2: 2,
    status: "FT",
  },
  {
    id: 2,
    date: "Mon, 21 Nov",
    team1: "TEAM 3",
    team2: "TEAM 4",
    score1: 1,
    score2: 1,
    status: "FT",
  },
  // Add more fixtures here
];

const FixturesPage = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  return (
    <SafeAreaView style={styles.root}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>E8</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search here..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
            placeholderTextColor="#fff"
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navBtns}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={[styles.navBtnText, styles.activeNav]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/player-stats")}>
            <Text style={styles.navBtnText}>Player stats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/standings")}>
            <Text style={styles.navBtnText}>Standings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/team-stats")}>
            <Text style={styles.navBtnText}>Team Stats</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.iconBtns}>
          <TouchableOpacity>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Fixtures List */}
      <ScrollView contentContainerStyle={styles.fixturesList}>
        {fixtures.map((fixture) => (
          <View key={fixture.id} style={styles.fixtureBox}>
            <Text style={styles.fixtureDate}>{fixture.date}</Text>
            <TouchableOpacity
              style={styles.fixtureRow}
              onPress={() => router.push(`/fixture-statistics/${fixture.id}`)}
            >
              <View style={styles.teamBox}>
                <Text style={styles.teamText}>{fixture.team1}</Text>
              </View>
              <Text style={styles.scoreText}>{fixture.score1}</Text>
              <Text style={styles.statusText}>{fixture.status}</Text>
              <Text style={styles.scoreText}>{fixture.score2}</Text>
              <View style={styles.teamBox}>
                <Text style={styles.teamText}>{fixture.team2}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Link href="/FixtureStatisticsPage">Fixture Statistics Page</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#6b8aa3",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#505a8b",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
    backgroundColor: "#222",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  searchContainer: {
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    backgroundColor: "#8ca0c9",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 18,
    color: "#fff",
  },
  navBtns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  navBtnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    marginRight: 12,
  },
  activeNav: {
    fontWeight: "700",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  iconBtns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginLeft: 12,
  },
  icon: {
    fontSize: 28,
    marginHorizontal: 4,
  },
  fixturesList: {
    paddingTop: 40,
    alignItems: "center",
    paddingBottom: 40,
  },
  fixtureBox: {
    width: "90%",
    marginBottom: 36,
  },
  fixtureDate: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 16,
    color: "#111",
  },
  fixtureRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c1840",
    borderRadius: 8,
    paddingVertical: 24,
    gap: 18,
  },
  teamBox: {
    backgroundColor: "#d7d7d7",
    borderRadius: 4,
    paddingVertical: 18,
    paddingHorizontal: 24,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  teamText: {
    fontWeight: "700",
    fontSize: 20,
    fontStyle: "italic",
    color: "#222",
    textAlign: "center",
  },
  scoreText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 32,
    marginHorizontal: 8,
    minWidth: 32,
    textAlign: "center",
  },
  statusText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 28,
    marginHorizontal: 8,
    minWidth: 40,
    textAlign: "center",
  },
});

export default FixturesPage;