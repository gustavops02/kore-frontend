import { Text, View } from "react-native";

export default function StatusCard({ 
    title = "Tudo em dia!", 
    message = "Todos já fizeram o pagamento este mês!",
    hasPending = false
}) {
    const backgroundColor = hasPending ? "#FFED88" : "bg-primary";
    
    return (
        <View className="mt-2">
            <Text className="text-dark_text_color text-3xl font-[Nunito-SemiBold] mb-3">
                {title}
            </Text>
            <View 
                className={`${backgroundColor} rounded-xl p-6 mt-4`}
                style={hasPending ? { backgroundColor: "#FFED88" } : {}}
            >
                <Text className={`text-dark_text_color text-lg text-center font-[Nunito-SemiBold]`}>
                    {message}
                </Text>
            </View>
        </View>
    );
}

