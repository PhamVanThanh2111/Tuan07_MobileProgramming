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
import { useFonts, Voltaire_400Regular } from '@expo-google-fonts/voltaire';

const Screen3 = ({ route, navigation }) => {
  const item = route.params;
  let [voltaireLoaded] = useFonts({
    Voltaire: Voltaire_400Regular,
  });

  // Nếu font chưa tải xong, hiển thị AppLoading
  if (!voltaireLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image
          style={{ width: 297, height: 340 }}
          source={item.img}></Image>
      </View>
      <View style={styles.c2}>
        <View>
          <Text
            style={{ fontSize: 35, fontWeight: 400, fontFamily: 'Voltaire' }}>
            {item.name}
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', columnGap: 30 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 400,
              color: '#00000096',
              fontFamily: 'Voltaire',
            }}>
            {'15% OFF I 350$'}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 400,
              textDecorationLine: 'line-through',
              fontFamily: 'Voltaire',
            }}>
            {'449$'}
          </Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 25, fontWeight: 400, fontFamily: 'Voltaire' }}>
            {'Description'}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: '#00000096',
              fontFamily: 'Voltaire',
            }}>
            {
              'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
            }
          </Text>
        </View>
      </View>
      <View style={styles.c3}>
        <View style={{ flex: 2,marginLeft: 15 }}>
          <Image
            source={require('../Images/heart.png')}
            style={{ width: 29, height: 26 }}
          />
        </View>
        <View style={{ flex: 8 }}>
          <TouchableOpacity
            style={{
              width: 270,
              height: 55,
              backgroundColor: '#E94141',
              borderRadius: 30,
            }}>
            <Text style={{ lineHeight: 55, textAlign: 'center' , fontSize: 25, fontWeight: 400, color: 'white', fontFamily: 'Voltaire'}}>
              {'Add to card'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
  },
  c1: {
    flex: 6,
    backgroundColor: '#E941411A',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  c2: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 12,
    marginLeft: 15,
  },
  c3: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 15
  },
});

export default Screen3;
