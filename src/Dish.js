import React, {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';


class Dish extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.left} onPress={() => {
      }}>
        <View style={styles.dish}>
          <Image
            source={{uri: this.props.elem.img}}
            style={styles.thumb}
          />
          <Text style={styles.text}>{this.props.elem.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  dish: {
    width: 91,
    height: 90,
    margin: 7,
    //borderWidth: 1,
  },
  thumb: {
    width: 91,
    height: 60,
  },
  text: {
    fontSize: 11,
  }
});

module.exports = Dish
