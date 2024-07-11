import { View, Text, StyleSheet, TouchableOpacity , Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const TabBar = ({state, descriptors, navigation }) => {

    const icons = {
      index: (props) => <AntDesign name="home" size={26} color={greyColor} {...props} />,
      explore: (props) => <Feather name="shopping-bag" size={24} color="black" {...props}/>,
      create: (props) => <AntDesign name="pluscircleo" size={26} color={greyColor} {...props} />,
      profile: (props) => <AntDesign name="user" size={26} color={greyColor} {...props} />,

    }

    const primaryColor ='#0891b2';
    const greyColor = '737373';
  return (
    <View style = {{styles,TabBar}}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
            options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;
        if (['_sitemap', '+not-found'].includes(route.name)) return null;  

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
            <Pressable
            key={route.name}
            style={styles.tabbarItems}
            role="button"
            accessibilityRole={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
            >
              {
                icons[route.name]({
                  color: isFocused? primaryColor:greyColor
                })
              }
                <Text style={{ color: isFocused ? primaryColor : greyColor }}>
                {label}
                </Text>
            </Pressable>
        );
        })}
    </View> 
  )
}


const styles = StyleSheet.create({
  tabbar:{
      position:'relative',
      bottom: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black',
      marginHorizontal: 20,
      paddingVertical: 15,
      borderRadius:25,
      borderCurve: 'continuous',
      shadow:{
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
      }
    },
      tabbarItems:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

})


export default TabBar