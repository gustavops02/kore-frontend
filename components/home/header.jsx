import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Header({ amount = "R$ 408,99" }) {
    return (
        <View className="pt-[60px] pb-24 px-6">
            <View className="flex-row justify-between items-center mb-6">
                <Ionicons name="person" size={30} color="white" />
                <Ionicons name="notifications" size={30} color="white" />
            </View>
            
            <View className="flex-row items-center justify-center">
                <View className="items-center justify-center">
                    <Text className="text-white text-[17px] font-[Nunito-Bold] mb-1">Valor a Receber</Text>
                    <Text className="text-white text-6xl font-[Nunito-SemiBold] leading-tight">{amount}</Text>
                </View>
            </View>
        </View>
    );
}

