import React from 'react';
import  { StyleSheet,Text,View,TextInput,TouchableOpacity } from 'react-native';
export default class Registeration extends React.Component{
    render(){
        return(
            <View style={Styles.Registeration}>
                <Text style={styles.header}>Registeration</Text>
                <TextInput style={styles.TextInput}placeholder="your  name" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.TextInput}placeholder="your  email" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.TextInput}placeholder="your  name" secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <TouchableOpacity style={styles.button}><Text style={styles.btnText}> sign up</Text></TouchableOpacity>
            </View>

        );

        
    }
}
const styles=StyleSheet.create({
    Registeration:{
          alignself:'stretch',
    },
    header:{
        fontSize:24,
        color:'#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor: '#199187',
        borderBottomWidth:1,
    },
    Textinput:{
        alignself:'stretch',
        height:40,
        marginBottom:30,
        color:'#fff',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,

    },
    button:{
        alignself:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
    },
    btnText:{
        color:'#fff',
        fontweight:'bold',

    },
})