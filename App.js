/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, SectionList, Text, StyleSheet, View } from 'react-native';
import _ from 'lodash';

import Item from './components/Item';
import Users from './components/users';

import StatusBar from './components/StatusBar';

const data = _.sortBy(Users, d => d.name)
const sorted = _.groupBy(data, d => d.name.charAt(0));

const reduced = _.reduce(sorted, (acc, next, index) => {
  acc.push({
    key: index,
    data: next,
  });
  return acc;
}, []);

const App = () => {

  return (
    <>
      <StatusBar backgroundColor="#bfe3c9" barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">

          <SectionList
            sections={reduced}
            contentContainerStyle={{ paddingBottom: 110 }}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, key }) => <Item key={key} name={item.name} initials={item.name.substring(0, 2)} />}
            renderSectionHeader={({ section: { key } }) => (
              <View style={styles.sectionContainer}>
                <Text style={styles.section}>{key}</Text>
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#6e9640',
    width: 25,
    marginTop: 10,
  },
  section: {
    fontSize: 20,
    paddingTop: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
  },
});

export default App;
