import React , {Component} from 'react';
import { View , Text } from 'react-native';

class AlbumList extends Component {

    componentWillMount(){
        console.log("This log is from componentWillMount ");
    }
    render(){
        return (
            <View>
                <Text> Album List 12456</Text>

            </View> 


        );
    } 

}

export default AlbumList;
