/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Platform, StatusBar, View, Text, TextInput } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 150 : StatusBar.currentHeight;

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    <View style={styles.textContainer}>
      <Text style={styles.textHeader}>Members</Text>
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search ..."
        style={styles.inputField}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  inputContainer: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    bottom: 20,
  },
  inputField: {
    borderBottomColor: '#ccc',
    minWidth: 250,
    maxWidth: 'auto',
    fontSize: 20,
    color: '#999',
    padding: 8,
  },
});

export default MyStatusBar;

