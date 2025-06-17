import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal, Linking } from 'react-native';

const images = [
  { 
    id: '1', 
    url: 'https://web.dev/static/css/image/hero-css_480.png?hl=id', 
    title: 'Belajar CSS', 
    link: 'https://web.dev/learn/css' 
  },
  { 
    id: '2', 
    url: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*_bK5vZ69rbZo_Z37.png', 
    title: 'Panduan JavaScript', 
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' 
  },
  { 
    id: '3', 
    url: 'https://www.techfor.id/wp-content/uploads/2019/12/html-1024x580.png', 
    title: 'Dasar-dasar HTML', 
    link: 'https://www.w3schools.com/html/' 
  },
  { 
    id: '4', 
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_403,h_265/https://academy.alterra.id/blog/wp-content/uploads/2022/10/1631026680-logo-react-native.png', 
    title: 'React Native', 
    link: 'https://reactnative.dev/' 
  },
];

export default function GalleryScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.subtitle}>Link Panduan Untuk Memahami Tentang Pembuatan WEB</Text>

      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2} // Menampilkan dalam 2 kolom
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <TouchableOpacity onPress={() => setSelectedImage(item.url)}>
              <Image source={{ uri: item.url }} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.linkText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal untuk memperbesar gambar */}
      <Modal visible={!!selectedImage} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.modalClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <Image source={{ uri: selectedImage }} style={styles.modalImage} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a1b', // Background gelap
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bbbbbb',
    marginBottom: 20,
  },
  gridContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: '#222',
    padding: 5,
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  linkText: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 320,
    height: 320,
    borderRadius: 15,
  },
  modalClose: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
