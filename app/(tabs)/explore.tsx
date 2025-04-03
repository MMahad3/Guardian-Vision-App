import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Appearance, Image } from "react-native";
import { useRouter } from "expo-router";

const ExploreScreen = () => {
 
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [backendData, setBackendData] = useState(null); // Store data from FastAPI backend
  const router = useRouter(); // Navigation hook

  // Effect to listen for theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  // Fetch backend data
  const fetchBackendData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/"); // FastAPI backend
      const data = await response.json();
      setBackendData(data);
      console.log("Data from backend:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when component loads
  useEffect(() => {
    fetchBackendData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo.jpg")} style={styles.logo} />
        <Text style={styles.headerText}>Explore CCTV Access</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.introText}>
          QR codes store information such as URLs, text, or commands.
        </Text>

        {/* Display backend data */}
        {backendData ? (
          <Text style={styles.backendResponse}>Server says: {backendData.message}</Text>
        ) : (
          <Text style={styles.backendResponse}>Loading data from backend...</Text>
        )}

        {/* QR Scanner Placeholder */}
        <View style={styles.scannerPlaceholder}>
          <Text style={styles.scanPrompt}>QR Scanner Disabled</Text>
        </View>

        {/* Scan Again Button */}
        <TouchableOpacity style={styles.button} onPress={fetchBackendData}>
          <Text style={styles.buttonText}>Fetch Data Again</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Secure CCTV access through QR scanning.</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#004d00",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  mainContent: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    marginHorizontal: 20,
  },
  scannerPlaceholder: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  scanPrompt: {
    fontSize: 16,
    color: "#fff",
  },
  introText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  backendResponse: {
    fontSize: 16,
    color: "#00ff00",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#00b300",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#004d00",
    borderRadius: 15,
    marginHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default ExploreScreen;
