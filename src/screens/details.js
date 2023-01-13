import { SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import {MercurySvg} from './../svg';


export default function Details({navigation, route}) {
    const planets =route.params.planet;
    const {name} =planets
    const renderImage=(name)=>{
        switch(name){
            case "mercury":
                return <MercurySvg /> ;
        }
    }
  return (
    <SafeAreaView style={styles.container}>
       <PlanetHeader title='Details' backBtn={true} />
       <ScrollView>
           <View style={styles.ImageView}>
           {renderImage(name)}
           </View>
       </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:colors.black,  
    },
    ImageView:{
      padding:spacing[5],
      alignItems:'center',
      justifyContent:'center',  
    }
})