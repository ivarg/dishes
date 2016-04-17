import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  View
} from 'react-native';

import DishList from './DishList.js';
import DishInfo from './DishInfo.js';
import AddDish from './AddDish.js';



class Nav extends Component {

  constructor(props) {
    super(props);

  this.navBarRouteMapper = {
    LeftButton: this.leftButton,
    Title: function(route, nav, index, navState) {},
    RightButton: this.addButton,
  }

  }

  leftButton(route, nav, index, navState) {
    if (index === 0) {
      return;
    }
    return (
      <TouchableOpacity style={styles.left} onPress={() => {
        if (index>0) {
          nav.pop();
        }
      }}>
        <Text style={styles.navtext} >Back</Text>
      </TouchableOpacity>
    );
  }

  addButton(route, nav, inde, navState) {
    if (route.component !== DishList) {
      return;
    }
    return (
      <TouchableOpacity style={styles.left} onPress={() => {
        nav.push({component: AddDish});
      }}>
        <Text style={styles.navtext}>Add</Text>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
  }

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{component: DishList}}
        renderScene={this.navRenderScene}
        navigationBar={
          <Navigator.NavigationBar style={styles.navbar} routeMapper={this.navBarRouteMapper} />
        }
      />
    );
  }

  navRenderScene(route, nav) {
    if (route.component) {
      return React.createElement(route.component, Object.assign({}, {nav: nav}, route.props));
    }

    switch (route.id) {
      case 'main':
          return (
            <DishList nav={nav}/>
          );
      case 'add':
          return (
            <AddDish/>
          );
      case 'info':
          return (
            <DishInfo/>
          );
    }
  }
}

const styles = StyleSheet.create({
  navigator: {
  },
  navbar: {
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  navtext: {
    alignSelf: 'flex-end'
  },
});

module.exports = Nav
