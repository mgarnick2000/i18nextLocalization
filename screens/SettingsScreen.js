import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

class SettingsScreen extends PureComponent {
  changeLanguage = lng => {
    const {navigation} = this.props;
    // setLanguage(lng);
    navigation.navigate('Home');
  };

  render() {
    const {languages, t} = this.props;
    const fixLngs = languages.map((i, idx) => ({
      key: `${idx}`,
      lng: i.substring(0, i.indexOf('-')),
    }));
    const availableLanguages = fixLngs.filter(
      f => f.lng === 'ar' || f.lng === 'en' || f.lng === 'fr',
    );

    debugger;
    return (
      <View style={styles.container}>
        <Text style={styles.language}>{t('Change the Language')}</Text>
        <FlatList
          data={availableLanguages}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text
                style={styles.languageOptions}
                onPress={() => this.changeLanguage(item.lng)}>
                {t(item.lng, {locale: item.lng})}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '10%',
  },
  language: {
    paddingTop: 10,
    textAlign: 'center',
  },
  languageOptions: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const mapStateToProps = ({locales}) => ({
  languages: locales.languages,
  isRTL: locales.isRTL,
});
export default connect(mapStateToProps)(withTranslation()(SettingsScreen));
