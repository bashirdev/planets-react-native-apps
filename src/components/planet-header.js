import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'

export default function PlanetHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <Text preset='h2'>THE PLANETS</Text>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:spacing[11],
        borderBottomWidth:0.2,
        borderBottomColor:colors.white,
      
    }
})