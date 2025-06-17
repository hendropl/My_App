import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Box utama */}
      <View style={styles.card}>
        {/* Judul */}
        <Text style={styles.title}>Get In Touch</Text>
        <Text style={styles.subtitle}>We are here for you! How can we help?</Text>

        {/* Input Nama */}
        <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#aaa" />

        {/* Input Email */}
        <TextInput style={styles.input} placeholder="Enter your email address" placeholderTextColor="#aaa" keyboardType="email-address" />

        {/* Input Pesan */}
        <TextInput style={[styles.input, styles.messageInput]} placeholder="Go ahead, we are listening..." placeholderTextColor="#aaa" multiline />

        {/* Tombol Submit */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {/* Informasi Kontak */}
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Ionicons name="location-outline" size={20} color="#5661E9" />
            <Text style={styles.contactText}>674 Washington, Avenue</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call-outline" size={20} color="#5661E9" />
            <Text style={styles.contactText}>620-215-4243</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="mail-outline" size={20} color="#5661E9" />
            <Text style={styles.contactText}>johndoe123@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2ff', // Background soft
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5661E9',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 80, // Input untuk pesan lebih besar
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#5661E9',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactInfo: {
    marginTop: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default ContactUsScreen;
