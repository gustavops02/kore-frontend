import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const navigationItems = [
    { icon: "home", label: "Home", active: true },
    { icon: "wallet-outline", label: "Carteira", active: false },
    { icon: "add", label: "Adicionar", active: false, isCenter: true },
    { icon: "people-outline", label: "Grupos", active: false },
    { icon: "settings-outline", label: "Configurações", active: false }
];

export default function BottomNavigation({ onNavigate }) {
    return (
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
            <View className="flex-row justify-between items-center">
                {navigationItems.map((item, index) => (
                    <TouchableOpacity 
                        key={index}
                        className="items-center"
                        onPress={() => onNavigate?.(item.label)}
                    >
                        {item.isCenter ? (
                            <View className="bg-primary rounded-full p-3">
                                <Ionicons name={item.icon} size={24} color="white" />
                            </View>
                        ) : (
                            <Ionicons 
                                name={item.icon} 
                                size={24} 
                                color={item.active ? "#00DF81" : "#1D1D1D"} 
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

