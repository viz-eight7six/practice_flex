'use strict';

const React = require('React');
const ReactNative = require('react-native');
const {
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  SegmentedControlIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = ReactNative;


class KeyboardAvoidingViewExample extends React.Component {
  // static title = '<KeyboardAvoidingView>';
  // static description = 'Base component for views that automatically adjust their height or position to move out of the way of the keyboard.';
  constructor() {
    super();
    this.state = {
      behavior: 'padding',
      modalOpen: false,
    };
    this.setState.bind(this);
  }

  onSegmentChange(segment){
    this.setState({behavior: segment.toLowerCase()});
  }

  render() {
    return (
      <View style={styles.outerContainer, {backgroundColor: 'rgba(0,0,0,0.5'}}>
        <Modal animationType="fade" visible={this.state.modalOpen}>
          <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
            <SegmentedControlIOS
              onValueChange={this.onSegmentChange}
              selectedIndex={this.state.behavior === 'padding' ? 0 : 1}
              style={styles.segment}
              values={['Padding', 'Position']} />
            <TextInput
              placeholder="Destination"
              style={styles.textInput}/>
          </KeyboardAvoidingView>
          <TouchableHighlight
            onPress={() => this.setState({modalOpen: false})}
            style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableHighlight>
        </Modal>

        <TouchableHighlight onPress={() => this.setState({modalOpen: true})}>
          <Text>Open Example</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
  },
  segment: {
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    left: 10,
  }
});

module.exports = KeyboardAvoidingViewExample;
