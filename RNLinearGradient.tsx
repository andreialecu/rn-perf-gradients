import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


export const RNLinearGradient = () => {
  return (
    <LinearGradient
      colors={['red', 'cyan', 'lime']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }} />
  );
};
