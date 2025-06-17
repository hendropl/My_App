import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Foto Profil dari assets */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/foto (2).jpeg')} // Ganti dengan nama file yang sesuai
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.name}>Hendro Paulus Limbong</Text>
      <Text style={styles.role}>Mahasiswa Informatika</Text>

      {/* Info Data */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>NPM</Text>
        <Text style={styles.infoBox}>G1A023091</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Universitas</Text>
        <Text style={styles.infoBox}>Universitas Bengkulu</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Lokasi</Text>
        <Text style={styles.infoBox}>Bengkulu, Indonesia</Text>
      </View>

      {/* Kotak Informasi */}
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Tentang Saya</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Tujuan</Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Motivasi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Kekhawatiran</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    paddingTop: 50,
  },
  imageWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Membuatnya menjadi lingkaran
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    width: 120,
  },
  infoBox: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '47%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },
  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
