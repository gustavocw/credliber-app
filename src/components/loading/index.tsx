import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Loading: React.FC = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <ActivityIndicator size="small" color="#EB5757" />
        <Text style={styles.text}>Por favor, aguarde...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 242,
    height: 64,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0C0E13',
  },
});

export default Loading;
