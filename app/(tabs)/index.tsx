import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av'; 
import TurboModuleRegistry from './../../node_modules/@react-native-async-storage/async-storage/lib/module/NativeAsyncStorageModule';

const HomeScreen = () => {
  const [classificationResult, setClassificationResult] = useState('');  
  const videoRef = useRef<Video>(null); 

  const handleFileUpload = () => {
    setClassificationResult('Result: Anomaly Detected');  
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.jpg')} 
          style={styles.logo}
        />
        <Text style={styles.headerText}>GUARDIAN VISION: IMPROVING PUBLIC SAFETY</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Expo AV Video Player */}
        <Video
          ref={videoRef}
          source={require('../../assets/videos/ANOMALY DETECTION.mp4')}
          style={styles.mainVideo}
          useNativeControls={false} //PLAY/PAUSE CONTROLS
          isLooping={true}
          shouldPlay={true}


          resizeMode="contain"
          isLooping
        />

        <Text style={styles.introText}>
          Welcome to our anomaly detection platform. This system leverages AI-powered technology for real-time detection of abnormal activities.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleFileUpload}>
          <Text style={styles.buttonText}>Test Video or Image</Text>
        </TouchableOpacity>

        {/* Display Classification Result */}
        <Text style={styles.resultText}>{classificationResult || 'Upload a video/image to see the result.'}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>About Us</Text>
        <Text style={styles.footerText}>
          We are a team of final-year Computer Science students from FAST University, working towards enhancing public safety.
        </Text>
      </View>
    </ScrollView>
  );
};

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
    marginRight: 30,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  mainContent: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
  },
  mainVideo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
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
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#004d00',
    borderRadius: 15,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
