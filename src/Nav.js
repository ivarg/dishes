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
    return (
      <TouchableOpacity style={styles.left} onPress={() => {
        nav.push({id: 'add'});
      }}>
        <Text style={styles.navtext}>Add</Text>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    //console.log('navigator mounted!!')
  }

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{id:'main'}}
        renderScene={this.navRenderScene}
        navigationBar={
          <Navigator.NavigationBar style={styles.navbar} routeMapper={this.navBarRouteMapper} />
        }
      />
    );
  }

  navRenderScene(route, nav) {
    switch (route.id) {
      case 'main':
          return (
            <DishList/>
          );
      case 'add':
          return (
            <AddDish/>
          );
    }
  }
}

const styles = StyleSheet.create({
  navigator: {
    //justifyContent: 'space-between',
    //backgroundColor: '#97f',
    //borderWidth: 1,
    //borderColor: 'red',
  },
  navbar: {
    //backgroundColor: '#9d6',
  },
  left: {
    flex: 1,
    //backgroundColor: '#976',
    justifyContent: 'center',
    padding: 10
  },
  navtext: {
    //flex: 1,
    //color: 'blue',
    alignSelf: 'flex-end'
  },
});

module.exports = Nav
