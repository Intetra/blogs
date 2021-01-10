import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  const { row, title, deleteIcon } = styles

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={row}>
              <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                  <Text style={title}>{item.title} - {item.content}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={deleteIcon} name="trash" />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" style={styles.createIcon} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  }, title: {
    fontSize: 18
  },
  deleteIcon: {
    fontSize: 24
  },
  createIcon: {
    fontSize: 30,
    marginRight: 20
  }
});

export default IndexScreen;
