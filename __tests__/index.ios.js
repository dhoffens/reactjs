import 'react-native';
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { AppRegistry, Text } from 'react-native';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

class HelloWorldApp extends Component {
	render () {
		return (
			<Text>Hello world!</Text>
		);
	}
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);