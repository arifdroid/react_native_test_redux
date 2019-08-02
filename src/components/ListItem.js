import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

export default class ListItem extends Component {
    render() {
        return (
            <TouchableOpacity 
            style={{flexDirection:'row', margin:2,backgroundColor:'#e8f3fd', padding:2}}
            onPress={this.props.onItemPressed}>
                
            <View style={{ flex:3, marginLeft:5}}>

                <View style={{flexDirection:'column'}}>
                    <Text style={{margin:5}}>{this.props.textHere}</Text>
                    <Text style={{margin:5}}>{this.props.index}</Text>
                </View>

            </View>    
                <Image 
                source={this.props.imageSet}
                style={{height:60, width:60, flex: 1}}></Image>
            </TouchableOpacity>
        )
    }
}
