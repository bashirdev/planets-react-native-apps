import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from './../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanetItem=({item})=>{
  const navigation=useNavigation();
  const {name, color} =item;
  return(
    <Pressable onPress={()=> {
        navigation.navigate('Details', {planet:item})  
    }} style={styles.item}>
 
    <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={[styles.circle, {backgroundColor:color}]} />
       <Text preset='h3' style={styles.itemName}>{name}</Text>
   
    </View>
    <AntDesign name="right" size={18} color="white" />
    </Pressable>
)
}


export default function Home({navigation}) {

  const renderItem=(({item})=>{
    
   return <PlanetItem item={item} />
   
})

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader  />
       <FlatList
       contentContainerStyle={styles.list}
           data={PLANET_LIST}
        renderItem={renderItem}
        ItemSeparatorComponent={()=> <View style={styles.separator} />}
        keyExtractor={item => item.name}
        />
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:colors.black,
    },
    list:{
      padding:spacing[5],  
    },

    item:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     padding:spacing[5],
    },

    circle:{
      width:30,
      height:30,
      borderRadius:50,
    
    },
    itemName:{
        marginLeft:spacing[4],
        textTransform:'uppercase'
    },

    separator:{
        borderWidth:0.5,
        borderBottomColor:colors.white,
    }
})