import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Appearance, Image } from 'react-native';
// import * as BarCodeScanner from 'expo-barcode-scanner'; // QR Code Scanner (Disabled)
import { useRouter } from 'expo-router';

const ExploreScreen = () => {
  // State for theme (light/dark mode)
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  // Navigation hook
  const router = useRouter();

  // Effect to listen for theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.jpg')} style={styles.logo} />
        <Text style={styles.headerText}>Explore CCTV Access</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.introText}>
          QR codes store information such as URLs, text, or commands. This feature is currently disabled for testing.
        </Text>

        {/* QR Scanner Placeholder */}
        <View style={styles.scannerPlaceholder}>
          <Text style={styles.scanPrompt}>QR Scanner Disabled</Text>
        </View>

        {/* Scan Again Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Scan Again</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Secure CCTV access through QR scanning.</Text>
      </View>
    </View>
  );
};

// CSS styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#004d00',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  mainContent: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginHorizontal: 20,
  },
  scannerPlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  scanPrompt: {
    fontSize: 16,
    color: '#fff',
  },
  introText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#00b300',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#004d00',
    borderRadius: 15,
    marginHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ExploreScreen;
