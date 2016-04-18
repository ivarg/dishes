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
    imgSrc = require('../img/generic-dish.png');
    return (
      <View style={styles.main}>
        <TouchableOpacity style={styles.left} onPress={() => {}}>
          <Image
            source={imgSrc}
            style={styles.thumb}
          />
        </TouchableOpacity>
        <Text style={styles.label}>Namn</Text>
        <TextInput
          style={styles.name}
          autoCorrect={false}
        />
        <Text style={styles.label}>Beskrivning</Text>
        <TextInput
          style={styles.desc}
          autoCorrect={false}
          multiline={true}
        />
        <View style={styles.button}>
          <Text style={styles.submit}>Add Dish</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 65,
    alignItems: 'stretch',
  },
  thumb: {
    margin: 30,
    width: 80,
    padding: 10,
    height: 80,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    margin: 10,
  },
  name: {
    margin: 10,
    height: 30,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  desc: {
    margin: 10,
    height: 60,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  submit: {
    color: 'white',
    alignSelf: 'center',
  }
});

module.exports = AddDish
