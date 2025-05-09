import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";

// Example squad data for demonstration; replace with API data as needed
const squads = {
  ARG: {
    Goalkeeper: ["Emiliano Martínez", "Franco Armani", "Gerónimo Rulli"],
    Defender: ["Nicolás Otamendi", "Cristian Romero", "Lisandro Martínez", "Nahuel Molina", "Gonzalo Montiel"],
    Midfielder: ["Rodrigo De Paul", "Leandro Paredes", "Enzo Fernández", "Alexis Mac Allister"],
    Forward: ["Lionel Messi", "Julián Álvarez", "Ángel Di María", "Lautaro Martínez"],
    Manager: ["Lionel Scaloni"],
  },
  BRA: {
    Goalkeeper: ["Alisson", "Ederson", "Weverton"],
    Defender: ["Thiago Silva", "Marquinhos", "Éder Militão", "Alex Sandro", "Dani Alves"],
    Midfielder: ["Casemiro", "Lucas Paquetá", "Fred", "Fabinho"],
    Forward: ["Neymar", "Richarlison", "Vinícius Júnior", "Gabriel Jesus"],
    Manager: ["Tite"],
  },
  // Add more teams as needed...
};

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <Link href="/PlayerStatsPage" style={styles.link}>
        <Text style={styles.linkText}>Player Stats Page</Text>
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

const SquadPage = () => {
  const { code } = useLocalSearchParams(); // Get the team code from the URL
  const squad = squads[code?.toUpperCase() || "ARG"] || squads["ARG"]; // Default to ARG if code not found

  const columns = [
    { label: "Goalkeeper", key: "Goalkeeper" },
    { label: "Defender", key: "Defender" },
    { label: "Midfielder", key: "Midfielder" },
    { label: "Forward", key: "Forward" },
    { label: "Manager", key: "Manager" },
  ];

  return (
    <SafeAreaView style={styles.root}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {columns.map((col) => (
            <View key={col.key} style={styles.column}>
              <Text style={styles.columnHeader}>{col.label}</Text>
              <ScrollView contentContainerStyle={styles.playerList}>
                {squad[col.key].map((player, idx) => (
                  <Text key={idx} style={styles.player}>
                    {player}
                  </Text>
                ))}
              </ScrollView>
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
  column: {
    backgroundColor: "#bfc6d1",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#49518a",
    overflow: "hidden",
    width: 200,
    margin: 8,
  },
  columnHeader: {
    backgroundColor: "#d3d3d3",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#49518a",
  },
  playerList: {
    backgroundColor: "#e5e5e5",
    paddingVertical: 8,
  },
  player: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    fontSize: 17,
    color: "#232323",
    textAlign: "center",
  },
});

export default SquadPage;