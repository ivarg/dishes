import React, {
  AppRegistry,
  Component,
} from 'react-native';

import DishList from './src/DishList.js';
import Nav from './src/Nav.js';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav/>
    );
  }
}


AppRegistry.registerComponent('dishes', () => App);
