import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';

class DetailsScreen extends PureComponent {
  navToHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button title="Navigation to Home" onPress={this.navToHome} />
      </View>
    );
  }
}

export default DetailsScreen;
