import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../../../redux/auth';

import styles from './styles';

function RestorePassword() {
  const { password } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return <View style={{ flex: 1, backgroundColor: 'blue' }} />;
}

export default RestorePassword;
