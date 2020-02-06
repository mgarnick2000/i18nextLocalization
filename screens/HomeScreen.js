import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends PureComponent {
  navToDetails = () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Icon name="home" size={25} color="blue" />
        <Button title="Navigate to Details" onPress={this.navToDetails} />
      </View>
    );
  }
}
export default HomeScreen;
