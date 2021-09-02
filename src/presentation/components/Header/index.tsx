import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export function AppHeader({
  scene,
  back,
  navigation,
}: NativeStackHeaderProps): React.ReactNode {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header style={{ backgroundColor: '#009edf' }}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon size={30} name="navicon" color="#ffffff" />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={title === 'Home' ? 'Growth Suplementos' : title}
        titleStyle={{
          fontSize: 18,
          // fontWeight: 'bold',
        }}
      />
      {!back && (
        <>
          <Appbar.Action
            icon="magnify"
            color="#ffffff"
            onPress={() => navigation.navigate('Pesquisar')}
          />

          <Appbar.Action
            icon="cart"
            color="#ffffff"
            onPress={() => navigation.navigate('Carrinho')}
          />
        </>
      )}
    </Appbar.Header>
  );
}
