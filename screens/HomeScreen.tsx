import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#6A11CB', '#2575FC']} style={styles.container}>
      <View style={styles.content}>
        {/* Bagian Kiri - Gambar */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/homescreen.png')} 
            style={styles.image}
          />
        </View>

        {/* Bagian Kanan - Teks */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Belajar Expo</Text>
          <Text style={styles.subtitle}>
            Aplikasi edukasi interaktif untuk mempelajari pengembangan aplikasi React Native.
          </Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Materi')}
          >
            <Text style={styles.buttonText}>Mulai Belajar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#EEE',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF8C42',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // Bayangan di Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
