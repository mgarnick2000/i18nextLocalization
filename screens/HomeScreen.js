import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {fetchLocaleAction} from '../store/modules/locales/actions';
import {withTranslation} from 'react-i18next';

class HomeScreen extends PureComponent {
  navToDetails = async () => {
    const {navigation, fetchLocale} = this.props;
    await fetchLocale();
    navigation.navigate('Details');
  };
  render() {
    const {t} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{t('Home Screen')}</Text>
        <Icon name="home" size={25} color="blue" />
        <Button title={t('Navigate to Details')} onPress={this.navToDetails} />
      </View>
    );
  }
}

const mapStateToProps = ({locales}) => ({
  locale: locales.locale,
});

export default connect(
  mapStateToProps,
  {
    fetchLocale: fetchLocaleAction,
  },
)(withTranslation()(HomeScreen));
