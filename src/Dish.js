import React, {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';

import DishInfo from './DishInfo.js';

class Dish extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var imgSrc = {uri: this.props.elem.img};
    console.log(imgSrc);
    if (imgSrc.uri == undefined) {
      imgSrc = require('../img/generic-dish.png');
    }

    return (
      <TouchableOpacity style={styles.left} onPress={() => {
        this.props.nav.push({component: DishInfo, props: {elem: this.props.elem}})
      }}>
        <View style={styles.dish}>
          <Image
            source={imgSrc}
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
