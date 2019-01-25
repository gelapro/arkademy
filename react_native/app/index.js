import React from 'react';
import {View, Text} from 'react-native';

export default class Index extends React.Component {

    constructor(){
        super();
        this.state = {
            number: 0,
            text: ""
        };
    }

    componentDidMount(){
       // setInterval(()=>{
       //     this.setState({
        //        number: this.state.number + 1
        //    });
        //}, 1000);
    }

   handleClick(myName){
    console.log('My name is ' + myName);
   }


   render(){
    const myName = "Ega Wachid Radiegtya";

    return (
        <View>
            <Text>Please Click Button Below</Text>
            <Text>{this.state.text}</Text>
            <TouchableOpacity onPress={()=> this.handleClick(myName)}>
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
        )
   }
}