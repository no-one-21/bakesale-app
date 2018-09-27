import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}> Bakesale </Text>
            </View>
            

        );
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        fontSize:40,
    },
})

export default App;