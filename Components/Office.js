
import { Text, View, Button, ScrollView } from 'react-native';
import { ConferenceRoom } from './Office-Buttons';

function OfficePage ({ navigation }) {
	return (
		
	<View style={
		{
			position: "absolute",
			height: "100%",
			width: "100%"
		}
	}>
		<ScrollView minimumZoomScale={1.0} maximumZoomScale={5.0}>
			<ConferenceRoom position={ {x: 50, y:60} }></ConferenceRoom>
		</ScrollView>
	</View>
	);
  }

export default OfficePage;