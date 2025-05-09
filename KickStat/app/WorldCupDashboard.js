import React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Button, Alert } from "react-native";
import { useRouter } from "expo-router";

import { Link } from "expo-router";

// --- Data for Groups and Knockout Stages ---

const groups = [
    {
        name: "Group A",
        teams: [
            { country: "Qatar", flag: "🇶🇦" },
            { country: "Ecuador", flag: "🇪🇨" },
            { country: "Senegal", flag: "🇸🇳" },
            { country: "Netherlands", flag: "🇳🇱" },
        ],
    },
    {
        name: "Group B",
        teams: [
            { country: "England", flag: "🇬🇧" },
            { country: "IR Iran", flag: "🇮🇷" },
            { country: "USA", flag: "🇺🇸" },
            { country: "Wales", flag: "🏴" },
        ],
    },
    {
        name: "Group C",
        teams: [
            { country: "Argentina", flag: "🇦🇷" },
            { country: "Saudi Arabia", flag: "🇸🇦" },
            { country: "Mexico", flag: "🇲🇽" },
            { country: "Poland", flag: "🇵🇱" },
        ],
    },
    {
        name: "Group D",
        teams: [
            { country: "France", flag: "🇫🇷" },
            { country: "Australia", flag: "🇦🇺" },
            { country: "Denmark", flag: "🇩🇰" },
            { country: "Tunisia", flag: "🇹🇳" },
        ],
    },
    {
        name: "Group E",
        teams: [
            { country: "Spain", flag: "🇪🇸" },
            { country: "Costa Rica", flag: "🇨🇷" },
            { country: "Germany", flag: "🇩🇪" },
            { country: "Japan", flag: "🇯🇵" },
        ],
    },
    {
        name: "Group F",
        teams: [
            { country: "Belgium", flag: "🇧🇪" },
            { country: "Canada", flag: "🇨🇦" },
            { country: "Morocco", flag: "🇲🇦" },
            { country: "Croatia", flag: "🇭🇷" },
        ],
    },
    {
        name: "Group G",
        teams: [
            { country: "Brazil", flag: "🇧🇷" },
            { country: "Serbia", flag: "🇷🇸" },
            { country: "Switzerland", flag: "🇨🇭" },
            { country: "Cameroon", flag: "🇨🇲" },
        ],
    },
    {
        name: "Group H",
        teams: [
            { country: "Portugal", flag: "🇵🇹" },
            { country: "Ghana", flag: "🇬🇭" },
            { country: "Uruguay", flag: "🇺🇾" },
            { country: "Korea Republic", flag: "🇰🇷" },
        ],
    },
];

const knockoutData = [
  {
    stage: "Round of 16",
    matches: [
      { left: "NED", leftScore: 3, right: "USA", rightScore: 1 },
      { left: "ARG", leftScore: 2, right: "AUS", rightScore: 1 },
      { left: "JPN", leftScore: 1, right: "CRO", rightScore: 1, penalties: "1-3" },
      { left: "BRA", leftScore: 4, right: "KOR", rightScore: 1 },
      { left: "ENG", leftScore: 3, right: "SEN", rightScore: 0 },
      { left: "FRA", leftScore: 3, right: "POL", rightScore: 1 },
      { left: "MAR", leftScore: 0, right: "ESP", rightScore: 0, penalties: "3-0" },
      { left: "POR", leftScore: 6, right: "SUI", rightScore: 1 },
    ],
  },
  {
    stage: "Quarter-final",
    matches: [
      { left: "NED", leftScore: 2, right: "ARG", rightScore: 2, penalties: "3-4" },
      { left: "CRO", leftScore: 1, right: "BRA", rightScore: 1, penalties: "4-2" },
      { left: "ENG", leftScore: 1, right: "FRA", rightScore: 2 },
      { left: "MAR", leftScore: 1, right: "POR", rightScore: 0 },
    ],
  },
  {
    stage: "Semi-final",
    matches: [
      { left: "ARG", leftScore: 3, right: "CRO", rightScore: 0 },
      { left: "FRA", leftScore: 2, right: "MAR", rightScore: 0 },
    ],
  },
  {
    stage: "Final",
    matches: [
      { left: "ARG", leftScore: 3, right: "FRA", rightScore: 3, penalties: "4-2", note: "Argentina won!" },
    ],
  },
  {
    stage: "Play-off for third place",
    matches: [
      { left: "CRO", leftScore: 2, right: "MAR", rightScore: 1 },
    ],
  },
];

// --- Components ---
const KnockoutBracket = () => (
  <View style={styles.knockoutContainer}>
    <Text style={styles.knockoutTitle}>Knockout Stage</Text>
    {knockoutData.map((stage) => (
      <View key={stage.stage} style={styles.knockoutStage}>
        <Text style={styles.knockoutStageTitle}>{stage.stage}</Text>
        <View style={styles.knockoutMatches}>
          {stage.matches.map((m, i) => (
            <View key={i} style={styles.knockoutMatchBox}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>{m.left}</Text> {m.leftScore} - {m.rightScore} <Text style={{ fontWeight: "bold" }}>{m.right}</Text>
              </Text>
              {m.penalties && (
                <Text style={styles.penaltiesText}>({m.penalties} pen)</Text>
              )}
              {m.note && (
                <Text style={styles.noteText}>{m.note}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    ))}
  </View>
);

const GroupsDisplay = () => (
  <View style={styles.groupsContainer}>
    {groups.map((group) => (
      <View key={group.name} style={styles.groupBox}>
        <Text style={styles.groupTitle}>{group.name}</Text>
        {group.teams.map((team) => (
          <View key={team.country} style={styles.teamRow}>
            <Text style={styles.flag}>{team.flag}</Text>
            <Text>{team.country}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const handleSearch = () => {
    Alert.alert("Search", `Searching for: ${search}`);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.logo}
        onPress={() => router.push("/")}
      >
        <Text style={styles.logoText}>E8</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search here..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navBtns}>
        <TouchableOpacity onPress={() => router.push("/fixtures")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Fixtures</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/player-stats")} style={styles.navBtn}>
          <Text style={[styles.navBtnText, { fontWeight: "700" }]}>Player stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/standings")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Standing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/team-stats")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Team Stats</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.iconBtns}>
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>🔔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const WorldCupDashboard = () => {
  const router = useRouter();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Navbar />
        <ScrollView contentContainerStyle={styles.content}>
          <KnockoutBracket />
          <GroupsDisplay />
          <View style={{ marginTop: 24 }}>
            <Button title="Go Back" onPress={() => router.back()} />
            <Link href="/FixturesPage">Fixtures</Link>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#5c6e8c",
    padding: 16,
  },
  container: {
    flex: 1,
    maxWidth: 1200,
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#3b4a6b",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 4 },
  },
  content: {
    padding: 24,
    backgroundColor: "#e9ecf6",
    flexGrow: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4b6cb7",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
    backgroundColor: "#e3eafc",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 18,
  },
  navBtns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  navBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  navBtnText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
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
  knockoutContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 24,
    marginBottom: 24,
  },
  knockoutTitle: {
    textAlign: "center",
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  knockoutStage: {
    marginVertical: 8,
  },
  knockoutStageTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
    color: "#555",
  },
  knockoutMatches: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  knockoutMatchBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    minWidth: 120,
    alignItems: "center",
    marginBottom: 4,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  penaltiesText: {
    fontSize: 12,
    color: "#888",
  },
  noteText: {
    fontSize: 12,
    color: "#b8860b",
    fontWeight: "bold",
  },
  groupsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
    marginTop: 32,
  },
  groupBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    minWidth: 140,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  groupTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#800000",
    fontSize: 16,
  },
  teamRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  flag: {
    fontSize: 20,
    marginRight: 8,
  },
});

export default WorldCupDashboard;