import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

// Example group standings data (replace with API data)
const groups = [
  {
    name: "Group A",
    teams: [
      { flag: "🇳🇱", code: "NED", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7 },
      { flag: "🇸🇳", code: "SEN", p: 3, w: 2, d: 0, l: 1, gd: 1, pts: 6 },
      { flag: "🇪🇨", code: "ECU", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
      { flag: "🇶🇦", code: "QAT", p: 3, w: 0, d: 0, l: 3, gd: -6, pts: 0 },
    ],
  },
  {
    name: "Group B",
    teams: [
      { flag: "🏴", code: "ENG", p: 3, w: 2, d: 1, l: 0, gd: 7, pts: 7 },
      { flag: "🇺🇸", code: "USA", p: 3, w: 1, d: 2, l: 0, gd: 1, pts: 5 },
      { flag: "🇮🇷", code: "IRN", p: 3, w: 1, d: 0, l: 2, gd: -3, pts: 3 },
      { flag: "🏴", code: "WAL", p: 3, w: 0, d: 1, l: 2, gd: -5, pts: 1 },
    ],
  },
  // Add more groups as needed
];

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <View style={styles.navbar}>
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
        <Text style={[styles.navBtnText, styles.activeNav]} onPress={() => router.push("/")}>
          Home
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/fixtures")}>
          Fixtures
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/player-stats")}>
          Player stats
        </Text>
        <Text style={styles.navBtnText} onPress={() => router.push("/team-stats")}>
          Team Stats
        </Text>
      </ScrollView>
    </View>
  );
};

const StandingsPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={styles.header} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Groups</Text>
        <View style={styles.groupsContainer}>
          {groups.map((group) => (
            <View key={group.name} style={styles.groupBox}>
              <Text style={styles.groupTitle}>{group.name}</Text>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderText}></Text>
                  <Text style={[styles.tableHeaderText, { flex: 2 }]}>Team</Text>
                  <Text style={styles.tableHeaderText}>P</Text>
                  <Text style={styles.tableHeaderText}>W</Text>
                  <Text style={styles.tableHeaderText}>D</Text>
                  <Text style={styles.tableHeaderText}>L</Text>
                  <Text style={styles.tableHeaderText}>GD</Text>
                  <Text style={styles.tableHeaderText}>Pts</Text>
                </View>
                {group.teams.map((team, idx) => (
                  <View key={team.code} style={[styles.tableRow, idx !== 0 && styles.tableRowBorder]}>
                    <Text style={styles.tableCell}>{team.flag}</Text>
                    <Text style={[styles.tableCell, { flex: 2 }]}>{team.code}</Text>
                    <Text style={styles.tableCell}>{team.p}</Text>
                    <Text style={styles.tableCell}>{team.w}</Text>
                    <Text style={styles.tableCell}>{team.d}</Text>
                    <Text style={styles.tableCell}>{team.l}</Text>
                    <Text style={styles.tableCell}>{team.gd}</Text>
                    <Text style={[styles.tableCell, styles.boldText]}>{team.pts}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Link href="/TeamStatsPage">Team Stats Page</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#232323",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3c4384",
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
  navBtnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    marginHorizontal: 8,
  },
  activeNav: {
    fontWeight: "700",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  header: {
    backgroundColor: "#7e98c1",
    height: 120,
  },
  content: {
    padding: 16,
    backgroundColor: "#f3f1e7",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 16,
    color: "#232323",
  },
  groupsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  groupBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    width: 260,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  groupTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#3c4384",
    marginBottom: 8,
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: "600",
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  tableRowBorder: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  boldText: {
    fontWeight: "700",
  },
});

export default StandingsPage;