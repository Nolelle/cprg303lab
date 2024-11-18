import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Your Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});

export default Footer;
