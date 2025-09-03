import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, View } from "react-native";

export default function SplashScreen() {
    const router = useRouter();

    //todo fazer a logica de redirecionamento se autenticado neste arquivo

    useEffect(() => {
         const contador = setTimeout(() => {
            router.replace("/home")
         }, 2000);

         return () => clearTimeout(contador);
     }, []);

    return (
        <View className="flex flex-1 items-center justify-center bg-primary gap-y-10">
            <Image 
                source={require("../assets/images/logo-transparent-splash.png")}
                className="resize-contain"
            />

            <ActivityIndicator size="large" className="color-white"></ActivityIndicator>
        </View>
    )
}