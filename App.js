import React, {Component} from "react";
import {AppRegistry, Dimensions, StyleSheet, Text, View, Animated, Image} from "react-native";
// You can put any logo if you want
// import Logo from './logo.jpg'

class App extends Component {

  constructor(props) {
    super(props);
    this.screenWidth = Math.round(Dimensions.get('window').width);
    this.screenHeight = Math.round(Dimensions.get('window').height);
  }

  componentDidMount(): void {
    this.startAnimation();
  }


  state = {
    animationX: new Animated.Value(40),
    animationY: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.animationX, {
        toValue: this.screenWidth - 150,
        duration: 2000
      }),
      Animated.timing(this.state.animationY, {
        toValue: this.screenHeight - 170,
        duration: 2000
      })]).start(() => {
      Animated.parallel([
        Animated.timing(this.state.animationX, {
          toValue: this.screenWidth - 210,
          duration: 800
        }),
        Animated.timing(this.state.animationY, {
          toValue: this.screenHeight - 135,
          duration: 800
        })]).start(() => {
        Animated.parallel([
          Animated.timing(this.state.animationX, {
            toValue: 0,
            duration: 2000
          }),
          Animated.timing(this.state.animationY, {
            toValue: 40,
            duration: 2000
          })]).start(() => {
          Animated.parallel([
            Animated.timing(this.state.animationX, {
              toValue: 40,
              duration: 800
            }),
            Animated.timing(this.state.animationY, {
              toValue: 0,
              duration: 800
            })]).start(() => {
            this.state.animationY.setValue(0);
            this.state.animationX.setValue(40);
            this.startAnimation();
          });
        });
      })
    });
  };

  render() {

    const animatedStyles = {
      left: this.state.animationX,
      top: this.state.animationY
    };
    return (
        <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]}>
    {/*<Image source={Logo} style={{height: 110, width: 150}}/>*/}
  <Text>WINDOWS LOGO</Text>
    </Animated.View>
    <Text>{this.valueX}</Text>
    </View>
  );

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  box: {
    position: "absolute",
    width: 150,
    height: 150,
    color: "blue"
  }
});


export default App;
