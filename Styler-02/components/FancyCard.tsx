import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';

interface FancyCardProps{
    data:{
        title: string,
        label: string,
        description:string,
        footer:string,
        imageUrl: string
    }
}

export default function FancyCard({data}:FancyCardProps) {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style= {[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: data.imageUrl
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{data.title}</Text>
            <Text style={styles.cardLabel}>{data.label}</Text>
            <Text style={styles.cardDescription}>{data.description}</Text>
            <Text style={styles.cardFooter}>{data.footer}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10
      },
      card:{
        // width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
      },
      cardElevated:{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
      },
      cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
      },
      cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
      },
      cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
      },
      cardLabel: {
        color: '#000000',
        fontSize:14,
        marginBottom: 6
      },
      cardDescription:{
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6
      },
      cardFooter: {
        color: '#000000'
      }
})