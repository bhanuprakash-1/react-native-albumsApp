import React from 'react';
import { Text , TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
    
    const { buttonStyles , textStyle } = style;

    return(
        <TouchableOpacity onPress= { onPress} style= {buttonStyles}>
            <Text style = {textStyle}>
                Click Me !!
            </Text>
        </TouchableOpacity>
    );
};

const style = {
    textStyle : {
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;