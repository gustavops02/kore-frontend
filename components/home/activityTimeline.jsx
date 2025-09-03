import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const activities = [
    {
        id: 1,
        title: "Netflix",
        description: "Pago por Eduardo",
        amount: "R$ 8,96",
        type: "received"
    },
    {
        id: 2,
        title: "Churrasco",
        description: "Pago por Ana",
        amount: "R$ 27,09",
        type: "received"
    },
    {
        id: 3,
        title: "Netflix",
        description: "Você pagou para Guilherme",
        amount: "R$ 8,96",
        type: "paid"
    }
];

export default function ActivityTimeline() {
    const getAmountColor = (type) => {
        return type === "received" ? "text-[#00C707]" : "text-[#FF1B1F]";
    };

    return (
        <View className="mt-8">
            <View className="flex-row items-center justify-between mb-9">
                <Text className="text-dark_text_color text-3xl font-[Nunito-SemiBold]">
                    Atividades recentes
                </Text>
                <Ionicons name="receipt-outline" size={20} color="#DF005E" />
            </View>

            <View className="space-y-8">
                {activities.map((activity, index) => (
                    <View key={activity.id}>
                        <View className="flex-row items-start">
                            <View className="w-3 h-3 bg-gray-300 rounded-full mt-2 mr-4"></View>
                            <View className="flex-1">
                                <View className="flex-row justify-between items-start">
                                    <View className="flex-1">
                                        <Text className="text-dark_text_color font-[Nunito-Medium] text-2xl">
                                            {activity.title}
                                        </Text>
                                        <Text className="text-dark_text_color font-[Nunito-Light] text-md">
                                            {activity.description}
                                        </Text>
                                    </View>
                                    <Text className={`${getAmountColor(activity.type)} font-[Nunito-Bold] text-xl`}>
                                        {activity.amount}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                        {index < activities.length - 1 && (
                            <View className="w-px h-8 bg-gray-300 ml-1.5"></View>
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
}

