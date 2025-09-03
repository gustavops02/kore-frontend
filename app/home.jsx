import { ScrollView, View } from "react-native";
import ActionButtons from "../components/home/actionButtons";
import ActivityTimeline from "../components/home/activityTimeline";
import BottomNavigation from "../components/home/bottomNavigation";
import Header from "../components/home/header";
import StatusCard from "../components/home/statusCard";

export default function HomeScreen() {
    const handleActionPress = (action) => {
        console.log(`Ação selecionada: ${action}`);
        // Implementar navegação ou lógica específica para cada ação
    };

    const handleStatusPress = () => {
        console.log("Status card pressionado");
        // Implementar lógica do status
    };

    const handleNavigation = (screen) => {
        console.log(`Navegando para: ${screen}`);
        // Implementar navegação entre telas
    };

    return (
        <View className="flex-1 bg-primary">
            <Header amount="R$ 408,99" />
            
            {/* ActionButtons flutuante */}
            <ActionButtons onActionPress={handleActionPress} />

            {/* Card branco principal */}
            <View className="bg-white rounded-t-3xl flex-1">
                <ScrollView 
                    className="flex-1 px-4" 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                >
                    {/* Espaço para o ActionButtons flutuante */}
                    <View className="h-24"></View>
                    
                    <StatusCard />
                    
                    <ActivityTimeline />

                    {/* Espaço para a navegação inferior */}
                    <View className="h-20"></View>
                </ScrollView>
            </View>

            <BottomNavigation onNavigate={handleNavigation} />
        </View>
    );
}