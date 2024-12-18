// src/components/ThemeWrapper.js
import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, ScrollView} from 'react-native';
import {lightTheme, darkTheme} from './theme';

const ThemeWrapper = ({children}) => {
  const theme = useSelector(state => state.theme.theme);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const styles = getStyles(currentTheme);

  return (
    <ScrollView style={styles.wrapper}>
      {children}
    </ScrollView>
  );
};

const getStyles = theme => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.background,
      // padding: 16,
    },
  });
};

export default ThemeWrapper;
