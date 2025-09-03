import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const actions = [
    { icon: "people-outline", label: "Novo grupo" },
    { icon: "card-outline", label: "Pagamento" },
    { icon: "receipt-outline", label: "Recibo" },
    { icon: "hand-left-outline", label: "Receber" }
];

export default function ActionButtons({ onActionPress }) {
    return (
        <View className="absolute top-[230px] left-0 right-0 z-10 px-2">
            <View className="bg-white p-4 shadow-lg shadow-gray-300 rounded-3xl mx-2">
                <View className="flex-row justify-between items-center">
                    {actions.map((action, index) => (
                        <View key={index} className="flex-1">
                            <TouchableOpacity 
                                className="items-center justify-center py-2"
                                onPress={() => onActionPress?.(action.label)}
                            >
                                <View className="bg-btn_menu rounded-full p-4 mb-1">
                                    <Ionicons name={action.icon} size={20} color="#1D1D1D" />
                                </View>
                                <Text className="text-dark_text_color text-sm font-[Nunito-Medium] text-center">
                                    {action.label}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

