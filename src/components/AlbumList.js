import React , {Component} from 'react';
import { View , Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = {albums:[] };

    UNSAFE_componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response =>this.setState({albums: response.data }) );
    }

    renderAlbums(){
        namesList = this.state.albums.map(album => <Text>{album.title}</Text>); 
        return namesList;
    }

    render(){
        console.log(this.state);
        return (
            <View>
                {/* <Text> Album List 124567</Text>  */}
                {this.renderAlbums()}
            </View> 


        );
    } 

}

export default AlbumList;
