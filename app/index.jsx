import { useFonts } from "expo-font";
import SplashScreen from "./splash";


export default function App() {

  const [loaded, error] = useFonts({
    'Nunito-Black': require('@/assets/fonts/Nunito-Black.ttf'),
    'Nunito-Bold': require('@/assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('@/assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-Light': require('@/assets/fonts/Nunito-Light.ttf'),
    'Nunito-Medium': require('@/assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('@/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('@/assets/fonts/Nunito-SemiBold.ttf'),
  });


  return <SplashScreen />;
  
}
