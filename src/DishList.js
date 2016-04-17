import React, {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';

import Dish from './Dish.js'

var dishes = [
  {name: 'Hemmagjord Pizza', img: 'http://cdn3.cdnme.se/cdn/9-1/407408/images/2010/ri_10567_3_83600844.jpg'},
  {name: 'Halloumiburgare', img: 'http://www.sainsburysmagazine.co.uk/blog/cache/com_zoo/images/garlic-mushroom-and-halloumi-burger_a9f32af5e355cb2c370dfdb7085b6651.jpg'},
  {name: 'Linssoppa med Chorizo', img: 'http://www.hemmetsjournal.se/ImageProvider/upload/hj/recept/bilder/Linssoppa-2-74cef3fb340d4e4d9c41f27c649fffa0__b468m.jpg'},
];

class DishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(dishes),
      loaded: true,
    })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.dishlist}
      />
    );
  }

  renderRow(elem) {
    return (
      <Dish elem={elem}/>
    );
  }
}

var styles = StyleSheet.create({
  dishlist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 65,
  },
})

module.exports = DishList;
