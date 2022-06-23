import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RNLinearGradient} from './RNLinearGradient';
import {SkiaGradient} from './SkiaGradient';

const ITEMS = Array.from({length: 1000}, (_, i) => i + 1);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [useSkia, setUseSkia] = useState(false);
  const [rerenderIndex, setRerenderIndex] = useState(0)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={backgroundStyle}>
        <View style={{padding: 20, backgroundColor: 'cyan'}}>
          <Text>
            Using:{' '}
            {useSkia ? 'react-native-skia' : 'react-native-linear-gradient'}{' '}
          </Text>
          <TouchableOpacity onPress={() => setUseSkia(skia => !skia)}>
            <Text>Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRerenderIndex(index => ++index)}>
            <Text>Rerender</Text>
          </TouchableOpacity>
        </View>
        {!useSkia ? (
          <View style={styles.wrap}>
            {ITEMS.map(item => (
              <View style={styles.item} key={item}>
                <RNLinearGradient key={rerenderIndex} />
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.wrap}>
            {ITEMS.map(item => (
              <View style={styles.item} key={item}>
                <SkiaGradient width={20} height={20} key={rerenderIndex} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {flexDirection: 'row', flexWrap: 'wrap'},
  item: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
