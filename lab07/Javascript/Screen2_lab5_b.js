import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { useFonts as useFontsVoltaire, Voltaire_400Regular} from '@expo-google-fonts/voltaire';

const DATA = [
  {
    id: 1,
    name: 'Pinarello',
    price: 1800,
    img: require('../Images/bifour_-removebg-preview.png'),
  },
  {
    id: 2,
    name: 'Pina Mountai',
    price: 1700,
    img: require('../Images/bione-removebg-preview.png'),
  },
  {
    id: 3,
    name: 'Pina Bike',
    price: 1500,
    img: require('../Images/bithree_removebg-preview.png'),
  },
  {
    id: 4,
    name: 'Pinarello',
    price: 1900,
    img: require('../Images/bitwo-removebg-preview.png'),
  },
  {
    id: 5,
    name: 'Pinarello',
    price: 2700,
    img: require('../Images/bithree_removebg-preview.png'),
  },
  {
    id: 6,
    name: 'Pinarello',
    price: 1350,
    img: require('../Images/bione-removebg-preview.png'),
  },
];

const Bike = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        width: '44%',
        height: 230,
        backgroundColor: '#F7BA8326',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
      }}
      onPress={()=>{tmp_navigation.navigate('Screen3', item)}}>
      <View style={{position: 'relative'}}>
        <View><Text style={{color: '#54545426', fontSize: 25, top: 5, left: -10}}>♥</Text></View>
        <Image source={item.img} style={{ width: 135, height: 127 }} />
      </View>
      <View>
        <Text style={{ fontWeight: 400, fontSize: 20, fontFamily: 'Voltaire', color: '#00000099'}}>{item.name}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{ color: '#F7BA83', fontSize: 20, fontWeight: 400 , fontFamily: 'Voltaire'}}>
          {'$'}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 400, fontFamily: 'Voltaire'}}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

var tmp_navigation;

const Screen2 = ({ navigation }) => {
  tmp_navigation = navigation;
  let [ubuntuFontsLoaded] = useFonts({
    Ubuntu: Ubuntu_400Regular,
  });

  let [voltaireLoaded] = useFontsVoltaire({
    Voltaire: Voltaire_400Regular,
  });

  // Nếu font chưa tải xong, hiển thị AppLoading
  if (!ubuntuFontsLoaded || !voltaireLoaded) {
    return <AppLoading />;
  }
  const renderItem = ({ item }) => {
    return <Bike item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Text
          style={{
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 30,
            color: '#E94141',
          }}>
          {'The world’s Best Bike'}
        </Text>
      </View>
      <View style={styles.c2}>
        <TouchableOpacity style={styles.categorySelected}>
          <Text style={styles.categoryTextSelected}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.c3}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{}}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  c1: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 12,
  },
  c2: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    width: '100%',
  },
  category: {
    borderColor: '#E9414187',
    borderRadius: 5,
    borderWidth: 2,
    width: 100,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorySelected: {
    borderColor: '#E94141',
    borderRadius: 5,
    borderWidth: 2,
    width: 100,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: { color: '#BEB6B6', fontSize: 20, fontWeight: 400 , fontFamily: 'Voltaire'},
  categoryTextSelected: { color: '#E9414187', fontSize: 20, fontWeight: 400 , fontFamily: 'Voltaire'},
  c3: {
    flex: 8.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Screen2;
