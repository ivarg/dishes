import React, {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ListView,
} from 'react-native';


class AddDish extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Namn:</Text>
        <TextInput
          style={styles.input}
          autoCorrect={false}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 65,
    //backgroundColor: 'blue'
  },
  input: {
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
  }
});

module.exports = AddDish
