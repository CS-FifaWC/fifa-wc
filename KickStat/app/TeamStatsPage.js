import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const teams = [
  { name: "Argentina", code: "ARG", flag: "https://flagcdn.com/w320/ar.png" },
  { name: "Australia", code: "AUS", flag: "https://flagcdn.com/w320/au.png" },
  { name: "Belgium", code: "BEL", flag: "https://flagcdn.com/w320/be.png" },
  { name: "Brazil", code: "BRA", flag: "https://flagcdn.com/w320/br.png" },
  { name: "Cameroon", code: "CMR", flag: "https://flagcdn.com/w320/cm.png" },
  { name: "Canada", code: "CAN", flag: "https://flagcdn.com/w320/ca.png" },
  { name: "Costa Rica", code: "CRC", flag: "https://flagcdn.com/w320/cr.png" },
  { name: "Croatia", code: "CRO", flag: "https://flagcdn.com/w320/hr.png" },
  { name: "Denmark", code: "DEN", flag: "https://flagcdn.com/w320/dk.png" },
  { name: "Ecuador", code: "ECU", flag: "https://flagcdn.com/w320/ec.png" },
  { name: "England", code: "ENG", flag: "https://flagcdn.com/w320/gb-eng.png" },
  { name: "France", code: "FRA", flag: "https://flagcdn.com/w320/fr.png" },
  { name: "Germany", code: "GER", flag: "https://flagcdn.com/w320/de.png" },
  { name: "Ghana", code: "GHA", flag: "https://flagcdn.com/w320/gh.png" },
  { name: "IR Iran", code: "IRN", flag: "https://flagcdn.com/w320/ir.png" },
  { name: "Japan", code: "JPN", flag: "https://flagcdn.com/w320/jp.png" },
  { name: "Korea Republic", code: "KOR", flag: "https://flagcdn.com/w320/kr.png" },
  { name: "Mexico", code: "MEX", flag: "https://flagcdn.com/w320/mx.png" },
  { name: "Morocco", code: "MAR", flag: "https://flagcdn.com/w320/ma.png" },
  { name: "Netherlands", code: "NED", flag: "https://flagcdn.com/w320/nl.png" },
  { name: "Poland", code: "POL", flag: "https://flagcdn.com/w320/pl.png" },
  { name: "Portugal", code: "POR", flag: "https://flagcdn.com/w320/pt.png" },
  { name: "Qatar", code: "QAT", flag: "https://flagcdn.com/w320/qa.png" },
  { name: "Saudi Arabia", code: "KSA", flag: "https://flagcdn.com/w320/sa.png" },
  { name: "Senegal", code: "SEN", flag: "https://flagcdn.com/w320/sn.png" },
  { name: "Serbia", code: "SRB", flag: "https://flagcdn.com/w320/rs.png" },
  { name: "Spain", code: "ESP", flag: "https://flagcdn.com/w320/es.png" },
  { name: "Switzerland", code: "SUI", flag: "https://flagcdn.com/w320/ch.png" },
  { name: "Tunisia", code: "TUN", flag: "https://flagcdn.com/w320/tn.png" },
  { name: "United States", code: "USA", flag: "https://flagcdn.com/w320/us.png" },
  { name: "Uruguay", code: "URU", flag: "https://flagcdn.com/w320/uy.png" },
  { name: "Wales", code: "WAL", flag: "https://flagcdn.com/w320/gb-wls.png" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
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
        <TouchableOpacity onPress={() => router.push("/player-stats")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Player stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/team-stats")} style={[styles.navBtn, styles.activeNav]}>
          <Text style={styles.navBtnText}>Team Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/standings")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Standings</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const TeamStatsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <Navbar />
      <Link href="/TeamPage">Team Page</Link>
      <View style={styles.container}>
        <Text style={styles.title}>TEAMS</Text>
        <ScrollView contentContainerStyle={styles.teamsGrid}>
          {teams.map((team) => (
            <TouchableOpacity
              key={team.code}
              onPress={() => router.push(`/teams/${team.code}`)}
              style={styles.teamCard}
            >
              <Image source={{ uri: team.flag }} style={styles.teamFlag} />
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.teamCode}>({team.code})</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Link href="/TeamStatsDetailsPage">Team Stats Page</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#6380a6",
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
  activeNav: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  container: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 24,
  },
  teamsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  teamCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    width: 140,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  teamFlag: {
    width: 48,
    height: 32,
    borderRadius: 4,
    marginBottom: 8,
  },
  teamName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#232323",
    marginBottom: 4,
  },
  teamCode: {
    fontSize: 13,
    color: "#888",
  },
});

export default TeamStatsPage;