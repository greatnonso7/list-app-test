/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      {<View style={styles.itemContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.initials}>
            <Text style={styles.initialsContent}>{props.initials}</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>{props.keyId}</Text>
          <Text style={styles.name}>
            {props.name}
          </Text>
        </View>
      </View>}
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderBottomWidth: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  initials: {
    backgroundColor: '#cbf2d5',
    height: 55,
    width: 55,
    borderRadius: 25,
  },
  initialsContent: {
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 13,
    fontWeight: '700',
    color: '#42604a',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
    textTransform: 'uppercase',
  },
});

export default Item;
