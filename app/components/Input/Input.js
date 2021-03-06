import React from 'react';
import { TouchableHighlight,TextInput } from 'react-native';
import styles from './styles';
const Input = ({children,value,autoCapitalize,onChangeText,width,height,alignItems,justifyContent,backgroundColor,borderBottomWidth,borderTopLeftRadius,borderBottomLeftRadius,placeholder1,color,borderWidth,borderColor,borderRadius,placeholder,textAlign,marginTop})=>{
	
	return(
		<TouchableHighlight style={[styles.input,{width,height,alignItems,justifyContent,backgroundColor,borderBottomWidth,borderTopLeftRadius,borderBottomLeftRadius,borderWidth,borderColor,borderRadius,marginTop}]}>
			<TextInput  autoCapitalize="words" value={value} onChangeText={onChangeText} type="text" placeholder={placeholder} underlineColorAndroid="transparent" style={[styles.text,{color,textAlign}]}>{children}</TextInput>
		</TouchableHighlight>
		);
}
module.exports = Input;