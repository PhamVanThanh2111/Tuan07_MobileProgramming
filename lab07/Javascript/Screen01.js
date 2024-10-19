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

const Screen01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            color: '#8353E2',
            fontSize: 24,
            fontWeight: 700,
            fontFamily: 'Epilogue',
            textAlign: 'center',
          }}>
          {'MANAGE YOUR\nTASK'}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Image
            source={require('../Images/mail.png')}
            style={{ width: 20, height: 20 }}
          />
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#999"
            style={styles.inputText}
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
          onPress={()=>{navigation.navigate('Screen02')}}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 400 }}>
            GET STARTED →
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
  },
  titleContainer: {
    flex: 6,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 14,
    marginLeft: 12,
    marginRight: 12,
    alignItems: 'center',
    paddingHorizontal: 15,
    columnGap: 15,
  },
  inputText: { flex: 1, height: 45, color: '#333', width: '100%' },
  inputContainer: {
    flex: 3,
  },
  btnContainer: { flex: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' },
});

export default Screen01;
