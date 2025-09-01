import { TextInput, View } from "react-native";

export default function KRInput({ placeholder, className }) {

    return (
        <View className={className}>
            <TextInput 
                className="w-full p-2 h-[58px] rounded-[10px] border border-gray-100 
                placeholder:text-placeholder_std
                placeholder:text-[15px]
                placeholder:font-[Nunito-Regular]"
                
                placeholder={placeholder}
                placeholderTextColor="#404040"
            />
        </View>
    )
}