import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default class InputComponent extends Component {

    constructor(){
        super()

        this.state={

            input:'',

        }
    }

    //function

    _functionText = (text) => {

        this.setState({

            input:text,
        })
    }

    _sendInput = () => {

        this.props.inputValue(this.state.input)
    }

    // function END 

    render() {
        return (
            <View style={{marginHorizontal:10, flexDirection:'row'}}>
                
                <TextInput
                    style={{marginHorizontal:10, width:'70%', backgroundColor:'skyblue'}}
                    onChangeText={this._functionText}
                    value={this.state.input}

                />
                <Button title='Add Now' onPress={this._sendInput}></Button>

            </View>
        )
    }
}
