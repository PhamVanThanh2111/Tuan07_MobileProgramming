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

const DATA = [
  { id: 1, content: 'To check email' },
  { id: 2, content: 'UI task web page' },
  { id: 3, content: 'Learn javascript basic' },
  { id: 4, content: 'Learn HTML Advance' },
  { id: 5, content: 'Medical App UI' },
  { id: 6, content: 'Learn Java' },
];

const Tast = ({ item }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#DEE1E678',
      width: '100%',
      height: 48,
      borderRadius: 24,
      marginBottom: 25,
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
      <View style={{ flex: 1 }}>
        <Image
          source={require('../Images/edit.png')}
          style={{ width: 24, height: 24 }}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const Screen03 = ({ route, navigation }) => {
  const getContent = route.params ? route.params.content : null;
  const [content, setContent] = useState('');
  useEffect(() => {
    if (getContent) {
      setContent(getContent);
    }
  }, [getContent]);
  const fnPost = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: content }),
    };
    fetch('https://670b37c8ac6860a6c2cb6d2b.mockapi.io/lab07', requestOptions);
  };

  const fnPut = (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'xyz' }),
    };
    fetch(
      `https://670b37c8ac6860a6c2cb6d2b.mockapi.io/lab07/${id}`,
      requestOptions
    );
  };

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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('../Images/back.png')}
              style={{ width: 22, height: 22 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 32, fontWeight: 700 }}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.searchC}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require('../Images/cell.png')}
          />
          <TextInput
            onChangeText={
              setContent
            }
            value={content}
            placeholder="Input your job"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            width: 190,
            height: 44,
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={fnPost()}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 400 }}>
            GET STARTED →
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('../Images/book.png')}
          style={{ width: 190, height: 170 }}
        />
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
    width: 24,
    height: 24,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  contentContainer: {
    flex: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen03;
