import { View } from "react-native";


export default function IconButton({children}) {
    return (
        <View className={`flex py-[5px] px-[20px] border border-gray-100 rounded-[7px]`}>
            {children}
        </View>
    );
}