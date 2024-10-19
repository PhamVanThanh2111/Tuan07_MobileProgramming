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

var tmp_navigation;

const fnDelete = (id) => {
  const requestOptions = {
    method: 'DELETE',
  };
  fetch(
    `https://670b37c8ac6860a6c2cb6d2b.mockapi.io/lab07/${id}`,
    requestOptions
  );
};

const Tast = ({ item }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#DEE1E678',
      width: '100%',
      height: 48,
      borderRadius: 24,
      marginBottom: 25,
    }}
    onPress={() => {
      tmp_navigation.navigate('Screen03');
    }}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 20,
      }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../Images/check.png')}
          style={{ width: 24, height: 24 }}
        />
      </View>
      <View style={{ flex: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>{item.content}</Text>
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: -20,
          columnGap: 10,
        }}>
        <TouchableOpacity onPress={()=>{fnDelete(item.id)}}>
          <Image
            source={require('../Images/delete.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{tmp_navigation.navigate('Screen03', item)}}>
          <Image
            source={require('../Images/edit.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const Screen02 = ({ navigation }) => {
  tmp_navigation = navigation;
  const url = 'https://670b37c8ac6860a6c2cb6d2b.mockapi.io/lab07';

  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDATA(data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Screen01');
              }}>
              <Image
                source={require('../Images/back.png')}
                style={{ width: 22, height: 22 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#D9CBF6',
              borderRadius: '50%',
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Images/profile.png')}
              style={{ width: 50, height: 50, borderRadius: '50%' }}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text
              style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>
              Hi Twinkle
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#9095A0',
                textAlign: 'center',
              }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.searchC}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../Images/search.png')}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Tast item={item} />}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
      <View style={styles.bottomC}>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: '50%',
            backgroundColor: '#00BDD6',
          }}
          onPress={() => {
            navigation.navigate('Screen03');
          }}>
          <Text
            style={{
              lineHeight: 70,
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
  },
  topScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  searchC: { flex: 1, marginTop: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  searchIcon: {
    marginRight: 5,
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  contentContainer: {
    flex: 6,
  },
  bottomC: {
    flex: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen02;
