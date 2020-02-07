import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';
import ChangeLanguageBtn from '../components/ChangeLanguage';

class HomeScreen extends PureComponent {
  navToDetails = async () => {
    const {navigation} = this.props;
    navigation.navigate('Details');
  };
  render() {
    const {t, isRTL, navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            bottom: '35%',
            alignSelf: !isRTL ? 'flex-end' : 'flex-start',
          }}>
          <ChangeLanguageBtn name="language" navigation={navigation} />
        </View>
        <Text>{t('Home Screen')}</Text>
        <Icon name="home" size={25} color="blue" />
        <Button title={t('Navigate to Details')} onPress={this.navToDetails} />
      </View>
    );
  }
}

const mapStateToProps = ({locales}) => ({
  locale: locales.locale,
  isRTL: locales.isRTL,
});

export default connect(mapStateToProps)(withTranslation()(HomeScreen));
