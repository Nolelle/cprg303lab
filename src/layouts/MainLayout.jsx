import React from 'react';
import {StyleSheet, View} from 'react-native';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
