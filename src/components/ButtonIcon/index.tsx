import React from "react";
import { Text,Image,View,TouchableOpacity } from "react-native";
import { styles } from "./styles";

import DiscordImg from "../../assets/discord.png";

type ButtonProps = {
  text:string;
}

export function ButtonIcon({text}: ButtonProps){
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>{text}</Text>

    </TouchableOpacity>
    
  );
}