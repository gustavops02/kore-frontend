import { Text, TouchableOpacity, View } from "react-native";

export default function KRAuthButton({text, onPress, className}) {
    return (
        <View className={className}>
            <TouchableOpacity onPress={onPress} className="w-full bg-primary rounded-[10px] h-[58px] flex justify-center items-center">
                <Text className="text-white font-[Nunito-ExtraBold] font-black text-center text-[18px]">{text}</Text>
            </TouchableOpacity>

        </View>
    )
}