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
      <Link href="/TeamStatsDetailsPage" style={styles.link}>
        <Text style={styles.linkText}>Team Stats Details</Text>
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
        <TouchableOpacity onPress={() => router.push("/player-stats")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Player stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/team-stats")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Team Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/standings")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Standings</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const TeamPage = () => {
  const router = useRouter();
  const { code } = useLocalSearchParams(); // Use useLocalSearchParams to get query parameters

  // You can fetch team details using the code param if needed
  const teamName = code ? code.toUpperCase() : "Team Name";

  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.teamName}>{teamName}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(`/teams/${code}/squad`)}
          >
            <Text style={styles.buttonText}>Squad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/standings")}
          >
            <Text style={styles.buttonText}>Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(`/teams/${code}/stats`)}
          >
            <Text style={styles.buttonText}>Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(`/teams/${code}`)}
          >
            <Text style={styles.buttonText}>Team Page</Text>
          </TouchableOpacity>
        </View>
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
    maxWidth: 1100,
    marginHorizontal: "auto",
    paddingTop: 36,
    alignItems: "center",
  },
  teamName: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 36,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 48,
    marginTop: 32,
    flexWrap: "wrap",
  },
  button: {
    width: 260,
    height: 260,
    backgroundColor: "#0b0e33",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "400",
  },
});

export default TeamPage;