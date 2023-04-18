import { View, TextInput, Button,Text } from 'react-native';
import { styles } from './styles'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your event'
          style={styles.input}
        />
        <Button
          title='+'
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>April Fools</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Coca cola Festival</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Ultra Festival</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Pascua</Text>
        </View>
      </View>
    </View>
  );
}

