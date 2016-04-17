import React, {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ListView,
} from 'react-native';


class DishInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>{this.props.elem.name}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 65,
  },
  input: {
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
  }
});

module.exports = DishInfo

