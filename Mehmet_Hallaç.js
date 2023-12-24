import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.alan1}>
        <Text style={[styles.baslik, styles.merhabaText]}>Merhaba dünya!</Text>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.alan2}>
        <Text style={[styles.baslik, styles.baslik1]}>baslık1. </Text>
        <View style={styles.baslik2Container}>
          <Text style={[styles.baslik, styles.baslik2Left]}>Left 1</Text>
          <Text style={[styles.baslik, styles.baslik2Left]}>Left 2</Text>
          <Text style={[styles.baslik, styles.baslik2]}>baslık2. </Text>
          <Text style={[styles.baslik, styles.baslik2Right]}>Right 1</Text>
          <Text style={[styles.baslik, styles.baslik2Right]}>Right 2</Text>
        </View>
        <Text style={[styles.baslik, styles.baslik3]}>İlk baslık3. </Text>
        <Text style={[styles.baslik, styles.baslik4]}>İlk baslık4. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00eaf2',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  alan1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    height: 5,
    width: '100%',
    backgroundColor: '#000000',
  },
  alan2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  baslik: {
    height: 60,
    width: 60,
  },
  baslik1: {
    backgroundColor: '#db0880',
  },
  baslik2Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  baslik2Left: {
    backgroundColor: '#ffcc00',
    marginRight: 8, // Adding space to the right of Left elements
  },
  baslik2: {
    backgroundColor: '#db0880',
    marginHorizontal: 8, // Adding space around 'baslik2'
  },
  baslik2Right: {
    backgroundColor: '#00cc66',
    marginLeft: 8, // Adding space to the left of Right elements
  },
  baslik3: {
    backgroundColor: '#4b07b2',
  },
  baslik4: {
    backgroundColor: '#ede900',
  },
  merhabaText: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});