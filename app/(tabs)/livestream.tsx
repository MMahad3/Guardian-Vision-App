import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Appearance, Image, ActivityIndicator } from 'react-native';
// import Video from 'react-native-video'; // Video streaming disabled for now
import { useLocalSearchParams } from 'expo-router';

const LiveStreamScreen = () => {
  const { streamUrl } = useLocalSearchParams<{ streamUrl: string }>(); // Get URL from QR scan

  return (
    <View style={styles.container}>
       {/* Header Section */}
            <View style={styles.header}>
              <Image source={require('../../assets/images/logo.jpg')} style={styles.logo} />
              <Text style={styles.headerText}>Live CCTV Feed</Text>
            </View>

      {/* Centered Grid Layout for Multiple Camera Feeds */}
      <View style={styles.gridWrapper}>
        <View style={styles.gridContainer}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.videoContainer}>
              <View style={styles.videoPlaceholder}>
                {/* Video Component Disabled */}
                {/* <Video source={{ uri: streamUrl }} style={styles.video} resizeMode="contain" controls /> */}
                <Text style={styles.cameraText}>Camera {item}</Text>
              </View>
              <ActivityIndicator size="small" color="#00ff00" style={styles.loader} />
            </View>
          ))}
        </View>
      </View>

      {/* Error Message if No Stream URL */}
      {!streamUrl && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>No live stream URL found. Please scan a valid QR code.</Text>
        </View>
      )}
    </View>
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
  fontSize: 18,
  color: '#fff',
  fontWeight: 'bold',
},
  gridWrapper: {
    flex: 1,
    justifyContent: 'center', // Centers grid vertically
    alignItems: 'center', // Centers grid horizontally
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Aligns items to center
    alignItems: 'center', 
    width: '100%',
    maxWidth: 400, // Ensures a good layout on all screens
  },
  videoContainer: {
    width: '45%',
    aspectRatio: 1.5, // Keeps a rectangular shape
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cameraText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    bottom: 10,
  },
  errorContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LiveStreamScreen;

