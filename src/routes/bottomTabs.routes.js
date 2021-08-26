import React from 'react';
import { Image,View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaPerfil from '../pages/Perfil/index';
import TelaBuscarProjetos from '../pages/BuscarProjetos/index';
import TelaHome from '../pages/SeusProjetos/index';

const Tab = createBottomTabNavigator();

export default function (){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='Seus Projetos' 
                component={TelaHome} 
                options={{ 
                    headerShown:false,
                    tabBarShowLabel:false,  
                    tabBarIcon:({focused}) =>(
                        <View>
                            <Image 
                                source={require("../assets/image/Propostas.png")}
                                style={{
                                    width: 36,
                                    height: 28,
                                    tintColor:focused? "#6C63FF":"#5F6368" ,
                                }}
                            />
                        </View>               
                    ),
                }}  
                
            />
            <Tab.Screen 
                name='BuscarProjetos' 
                component={TelaBuscarProjetos}  
                options={{ 
                    headerShown:false,
                    tabBarShowLabel:false,  
                    tabBarIcon:({focused}) =>(
                        <View>
                            <Image 
                                source={require("../assets/image/IconBuscar.png")}
                                style={{
                                    width: 31,
                                    height: 30,
                                    tintColor:focused? "#6C63FF":"#5F6368" ,
                                }}
                            />
                        </View>               
                    ),                   
                }}                      
            />
            <Tab.Screen 
                name='Perfil' 
                component={TelaPerfil}  
                options={{ 
                    headerShown:false,
                    tabBarShowLabel:false,  
                    tabBarIcon:({focused}) =>(
                        <View>
                            <Image 
                                source={require("../assets/image/IconPerfil.png")}
                                style={{
                                    width: 31,
                                    height: 30,
                                    tintColor: focused ? "#6C63FF":"#5F6368",
                                }}
                            />
                        </View>               
                    ),
                }} 
            />
        </Tab.Navigator>
    );
}