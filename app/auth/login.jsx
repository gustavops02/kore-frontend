import KRAuthButton from "@/components/button/authButton";
import IconButton from "@/components/button/iconButton";
import KRInput from "@/components/input";

import { Image, Text, View } from "react-native";

import AppleIcon from "@/assets/images/icons/ic_apple.svg";
import GoogleIcon from "@/assets/images/icons/ic_google.svg";


export default function LoginScreen() {

    const handleLoginPress = () => {
        // Lógica do que acontece quando o botão é pressionado
    };

    return (
        <View className="bg-white flex flex-1 px-35">

            <Image 
                source={require("../../assets/images/logo-login.png")}
                className="resize-contain self-center mb-[8px] w-image-standard"
            />

            <Text 
                className="text-[20px] font-[Nunito-Regular]">
                    Entre com sua conta
            </Text>
            
            <View className="mt-[34px]">
                <KRInput placeholder={"E-mail"}/>
                <KRInput className="mt-[27px]" placeholder={"Senha"} />
                <KRAuthButton className="my-[46px]" text="Entrar" onPress={handleLoginPress} />
            </View>

            <Text className="text-center text-dark_text_color font-[Nunito-Regular] text-[15px]">Ou faça login com</Text>


            <View className="flex flex-row items-center justify-center gap-10 mt-[39px]">
                <IconButton>
                    <GoogleIcon/>
                </IconButton>

                <IconButton>
                    <AppleIcon/>
                </IconButton>
            </View>

            <View className="flex-1 flex-row items-center justify-center">
                <Text className="text-dark_text_color font-[Nunito-Regular] text-[15px]">Não tem uma conta?{" "}</Text>
                <Text className="text-monochromatic font-bold font-[Nunito-Bold] text-[15px]">Registre-se</Text>
            </View>

        </View>
    )
}