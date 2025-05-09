import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Link href="/MostAssistsPage" style={styles.link}>
        <Text style={styles.linkText}>Most Assists Page</Text>
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

const MostPassesPage = () => {
  const passesData = [
    { player: "Rodrigo De Paul", country: "Argentina", flag: "🇦🇷", passes: 543 },
    { player: "John Stones", country: "England", flag: "🏴", passes: 448 },
    { player: "Aurélien Tchouaméni", country: "France", flag: "🇫🇷", passes: 464 },
    { player: "Toby Alderweireld", country: "Belgium", flag: "🇧🇪", passes: 266 },
    { player: "Aaron Mooy", country: "Australia", flag: "🇦🇺", passes: 200 },
  ];

  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={styles.header}>
        <Text style={styles.headerText}>MOST PASSES</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {passesData.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={styles.playerName}>{item.player}</Text>
              </View>
              <Text style={styles.passesCount}>{item.passes}</Text>
              <Text style={styles.passesLabel}>Most Passes</Text>
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
    backgroundColor: "#0b0e33",
    borderRadius: 8,
    padding: 16,
    width: 160,
    alignItems: "center",
    margin: 8,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  flag: {
    fontSize: 24,
    marginRight: 8,
  },
  playerName: {
    fontWeight: "bold",
    color: "#fff",
  },
  passesCount: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  passesLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MostPassesPage;