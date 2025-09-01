import { Text } from "react-native";

export default function KoreText({children, font, wind}) {
    return (
        <Text style={{fontFamily:font}} className={wind}>
            {children}
        </Text>
    )
}