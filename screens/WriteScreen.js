import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  Image
} from 'react-native';

import firebase from 'firebase';
import db from '../config';

export default class WriteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      titleText: '',
      authorText: '',
      storyText: '',
    }
  }

  submitStory = async () => {
    db.collection("Stories").add({
      'author': this.state.authorText,
      'title': this.state.titleText,
      'date': firebase.firestore.Timestamp.now().toDate(),
      'storyText': this.state.storyText
    })
    this.setState({
      storyText: '',
      authorText: '',
      titleText: '',
    })
    ToastAndroid.show("Book has been submitted", ToastAndroid.SHORT);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>

          <Text>WriteScreen</Text>
          <Image
            source={require("../assets/writer_logo.png")}
            style={{ width: 100, height: 100 }} />
          <View style={styles.titleInputView}>
            <TextInput
              style={styles.titleInputBox}
              placeholder='title'
              onChangeText={text => this.setState({ titleText: text })}
              value={this.state.titleText} />
          </View>

          <View style={styles.authorInputView}>
            <TextInput
              style={styles.authorInputBox}
              placeholder='author'
              onChangeText={text => this.setState({ authorText: text })}
              value={this.state.authorText} />
          </View>

          <View style={styles.storyInputView}>
            <TextInput
              style={styles.storyInputBox}
              placeholder='Story'
              multiline
              editable
              onChangeText={text => this.setState({ storyText: text })}
              value={this.state.storyText} />
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={async () => {
              var submition = this.submitStory();
            }}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, storyInputView: {
    flexDirection: 'row',
    margin: 20,
  },
  storyInputBox: {
    width: 300,
    height: 300,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  titleInputView: {
    flexDirection: 'row',
    margin: 20,
  },
  titleInputBox: {
    width: 150,
    height: 20,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  authorInputView: {
    flexDirection: 'row',
    margin: 20,
  },
  authorInputBox: {
    width: 150,
    height: 20,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  submitButton: {
    backgroundColor: "#008b8b",
    width: 100,
    height: 50,
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});