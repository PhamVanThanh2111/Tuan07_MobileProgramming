import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const getImage = (imgName) => {
  switch (imgName) {
    case 'donut_yellow.png':
      return require('../Images/donut_yellow.png');
    case 'tasty_donut.png':
      return require('../Images/tasty_donut.png');
    case 'green_donut.png':
      return require('../Images/green_donut.png');
    case 'donut_red.png':
      return require('../Images/donut_red.png');
  }
};

const Donut = ({ item }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#F4DDDD',
      width: '100%',
      height: 120,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 10,
      marginBottom: 15,
    }}>
    <View
      style={{
        flex: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={getImage(item.img)} style={{ width: 110, height: 100 }} />
    </View>
    <View
      style={{
        flex: 7,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-between',
      }}>
      <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: 700 }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 15,
          fontWeight: 700,
          color: '#0000008A',
        }}>
        {item.desciption}
      </Text>
      <Text style={{ fontFamily: 'Roboto', fontSize: 20, fontWeight: 700 }}>
        {'$' + item.price + '.00'}
      </Text>
    </View>
  </TouchableOpacity>
);

const Master = ({ route, navigation }) => {
  const [DATA, setDATA] = useState([]);
  useEffect(() => {
    fetch('https://670b37c8ac6860a6c2cb6d2b.mockapi.io/donut')
      .then((res) => res.json())
      .then((data) => setDATA(data));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Text
          style={{
            color: '#000000A6',
            fontSize: 16,
            fontWeight: 700,
            fontFamily: 'Roboto',
          }}>
          Welcome, Jala!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Roboto' }}>
          Choice you Best food
        </Text>
      </View>
      <View style={styles.c2}>
        <View style={styles.btnContainer}>
          <TextInput
            placeholder="Search food"
            placeholderTextColor="#C4C4C4"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.c3}>
        <View>
          <TouchableOpacity style={styles.categoryBtnSelected}>
            <Text style={styles.textBtn}>Donut</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.categoryBtn}>
            <Text style={styles.textBtn}>Pink Donut</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.categoryBtn}>
            <Text style={styles.textBtn}>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.c4}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Donut item={item} />}
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
    backgroundColor: 'white',
  },
  c1: { flex: 1, padding: 12 },
  c2: { flex: 1, paddingLeft: 12, paddingRight: 12 },
  btnContainer: {
    height: 43,
    width: '80%',
  },
  textInput: {
    color: '#000',
    lineHeight: 43,
    paddingLeft: 12,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 5,
  },
  c3: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  categoryBtn: { width: 100, height: 35, borderWidth: 1, borderRadius: 5 },
  categoryBtnSelected: {
    width: 100,
    height: 35,
    backgroundColor: '#F1B000',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C18D00',
  },
  textBtn: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 35,
    textAlign: 'center',
  },
  c4: { flex: 8, marginLeft: 12, marginRight: 12 },
});

export default Master;
