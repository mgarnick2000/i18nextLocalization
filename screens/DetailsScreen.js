import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {withTranslation} from 'react-i18next';

class DetailsScreen extends PureComponent {
  navToHome = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  };
  render() {
    const {t} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{t('Details Screen')}</Text>
        <Button title={t('Navigation to Home')} onPress={this.navToHome} />
      </View>
    );
  }
}

export default withTranslation()(DetailsScreen);
