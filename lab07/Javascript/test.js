import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const fnPut = () => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'state': false, 'course': 'course 1', 'id': '1'}),
  };
  fetch('https://670b37c8ac6860a6c2cb6d2b.mockapi.io/todo/1', requestOptions);
};

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.product, { backgroundColor }]}>
    <View style={{ flex: 3 }}>
      <Text style={{ lineHeight: 21 }}>{item.state}</Text>
      <Text style={{ lineHeight: 21 }}>{item.course}</Text>
    </View>
    <View
      style={{
        width: 100,
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
        columnGap: 10,
      }}>
      <TouchableOpacity
      onPress={{}}
        style={{ height: 38, width: 88, backgroundColor: '#F31111' }}>
        <Text style={{ color: 'white', textAlign: 'center', lineHeight: 38 }}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: 38, width: 88, backgroundColor: '#F31111' }}>
        <Text style={{ color: 'white', textAlign: 'center', lineHeight: 38 }}>
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Screen4_a = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();

  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    var url = 'https://670b37c8ac6860a6c2cb6d2b.mockapi.io/todo';
    var fn = fetch(url);
    fn.then((res) => res.json()).then((DATA) => setDATA(DATA));
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'white' : '#E5E5E5';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
    width: '100%',
  },

  content: {
    flex: 11,
  },
  product: {
    width: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'E5E5E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderTopColor: '#C4C4C4',
    borderTopWidth: 1,
  },
});

export default Screen4_a;
