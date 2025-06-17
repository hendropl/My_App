import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const materiList = [
  {
    id: 1,
    title: 'React Native Basics',
    tujuan: [
      'Memahami konsep dasar materi',
      'Mampu mengimplementasikan dalam proyek',
      'Mengenal best practices pengembangan',
    ],
    penjelasan:
      'React Native adalah kerangka kerja (framework) open-source yang dikembangkan oleh Facebook untuk membangun aplikasi mobile lintas platform (iOS dan Android) menggunakan JavaScript dan React. Dengan React Native, pengembangan dapat menulis kode sekali dan menggunakannya di kedua platform, sehingga menghemat waktu dan usaha. Dasar-dasar React Native meliputi konsep komponen yang reusable, seperti View, Text, dan Image, yang disusun menggunakan JSX (JavaScript XML) untuk membangun antarmuka pengguna. State management menggunakan hooks seperti useState dan useEffect memungkinkan pengelolaan data dinamis, sementara styling dilakukan melalui objek JavaScript atau StyleSheet untuk desain yang responsif. React Native juga memanfaatkan sistem tata letak Flexbox untuk mengatur tampilan, serta menyediakan komponen khusus seperti ScrollView, FlatList, dan Touchable untuk interaksi pengguna. Untuk navigasi antar layar, biasanya digunakan library tambahan seperti React Navigation. Dengan dukungan komunitas yang besar dan dokumentasi yang lengkap, React Native menjadi pilihan populer untuk pengembangan aplikasi mobile yang efisien dan performant.',
    contohImplementasi: `// Contoh dasar
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>React Native Basics berhasil diimplementasikan!</Text>
    </View>
  );
};

export default App;`,
  },
  {
    id: 2,
    title: 'State dan Props',
    tujuan: [
      'Memahami perbedaan state dan props',
      'Menggunakan state dan props dalam komponen',
      'Mengelola data dinamis dengan state',
    ],
    penjelasan:
      'State dan props adalah dua konsep fundamental dalam React dan React Native. State digunakan untuk menyimpan data yang dapat berubah selama komponen tersebut hidup, sementara props digunakan untuk mengirim data dari komponen induk ke komponen anak. State biasanya dikelola menggunakan hook useState, sedangkan props diteruskan sebagai argumen ke komponen. Dengan memahami state dan props, Anda dapat membangun komponen yang dinamis dan interaktif.',
    contohImplementasi: `// Contoh penggunaan state dan props
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Tambah" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;`,
  },
];

export default function MateriScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>📚 Materi React Native</Text>
      </View>

      {/* Daftar Materi */}
      <View style={styles.content}>
        {materiList.map((item) => (
          <View key={item.id} style={styles.materiContainer}>
            {/* Judul Materi */}
            <Text style={styles.materiTitle}>{item.title}</Text>

            {/* Tujuan Pembelajaran */}
            <Text style={styles.subTitle}>Tujuan Pembelajaran:</Text>
            {item.tujuan.map((tujuan, index) => (
              <Text key={index} style={styles.tujuanItem}>
                - {tujuan}
              </Text>
            ))}

            {/* Penjelasan Materi */}
            <Text style={styles.subTitle}>Penjelasan:</Text>
            <Text style={styles.penjelasan}>{item.penjelasan}</Text>

            {/* Contoh Implementasi */}
            <Text style={styles.subTitle}>Contoh Implementasi:</Text>
            <View style={styles.codeContainer}>
              <Text style={styles.codeText}>{item.contohImplementasi}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  materiContainer: {
    marginBottom: 30,
  },
  materiTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007bff',
    marginTop: 10,
    marginBottom: 5,
  },
  tujuanItem: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
    marginBottom: 3,
  },
  penjelasan: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'justify',
  },
  codeContainer: {
    backgroundColor: '#2d2d2d',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  codeText: {
    color: '#f8f9fa',
    fontFamily: 'monospace',
    fontSize: 12,
  },
});