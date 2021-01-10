import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  const { input, input2, label, container, button } = styles

  return (
    <View style={container}>
      <Text style={label}>Enter Title:</Text>
      <TextInput style={input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={label}>Enter Content:</Text>
      <TextInput style={[input, input2]} value={content} onChangeText={(text) => setContent(text)} />
      <View style={button}>
        <Button
          title='Submit'
          onPress={() => onSubmit(title, content)} />
      </View>
    </View>
  )
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5
  },
  input2: {
    height: '50%'
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  },
  button: {
    marginHorizontal: '33%'
  }
});

export default BlogPostForm;
