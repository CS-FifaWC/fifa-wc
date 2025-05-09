import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from "expo-router";

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
        <TouchableOpacity onPress={() => router.push("/match-details")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Match Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/player-profiles")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Player Profiles</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/team-stats")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>Team Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings")} style={styles.navBtn}>
          <Text style={styles.navBtnText}>⚙</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn}>
          <Text style={styles.navBtnText}>🔔</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const SettingsPage = () => {
  const settingsOptions = [
    "Theme toggle",
    "Notification preferences",
    "Data sync options",
    "Account info",
    "About / Help",
  ];

  return (
    <View style={styles.root}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>System Settings</Text>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.settingItem}>
            <Text style={styles.settingText}>➤ {option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#7291af",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#464f8b",
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
    backgroundColor: "#7b88b6",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 18,
    color: "#232323",
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
  container: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#111",
    marginBottom: 32,
  },
  settingItem: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 14,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  settingText: {
    fontSize: 20,
    color: "#333",
  },
});

export default SettingsPage;