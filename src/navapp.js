import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

var routeStack = [{id: 'first'}, {id: 'second'}];

var navBarRouteMapper = {
  LeftButton: function(route, nav, index, navState) {
    return (
      <TouchableHighlight style={{marginTop: 30}} onPress={() => {
        if (index>0) {
          nav.pop();
        }
      }}>
        <Text>Back</Text>
      </TouchableHighlight>
    );
  },
  Title: function(route, nav, index, navState) {},
  RightButton: function(route, nav, index, navState) {}
}

class DishApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('tjosan');
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={routeStack[0]}
        initialRouteStack={routeStack}
        renderScene={this.navRenderScene}
        navigationBar={
          <Navigator.NavigationBar routeMapper={navBarRouteMapper} />
        }
      />
    );
  }

  navRenderScene(route, nav) {
    console.log(route);
    console.log(nav);
    _navigator = nav;
    switch (route.id) {
      case 'first':
        return (<Dish text='first' navigator={nav}/>)
      case 'second':
        return (<Dish text='second' navigator={nav}/>)
    }
  }
}

class Dish extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to {this.props.text}</Text>
        <TouchableHighlight onPress={this.onPressButton.bind(this)}>
          <Text style={styles.button}>Press Me!</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onPressButton() {
    this.props.navigator.push({id: 'second'});
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#939',
    color: 'white',
    alignSelf: 'center',
    padding: 10,
  },
  navigator: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F5FCFF',
    borderWidth: 3,
    borderColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
  },
});

AppRegistry.registerComponent('dishes', () => DishApp);
