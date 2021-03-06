import React from "react";
import { Text,Image,View,TouchableOpacity,TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

import DiscordImg from "../../assets/discord.png";

type ButtonProps = TouchableOpacityProps & {
  text:string;
}

export function ButtonIcon({text,...rest}: ButtonProps){
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>{text}</Text>

    </TouchableOpacity>
    
  );
}