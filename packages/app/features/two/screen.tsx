import { Text, View } from "react-native";
import { vars } from "nativewind";
import { TextLink } from "solito/link";

const theme = vars({
  "--theme-rg": "blue",
});


const TabTwoScreen = () => {

  return (
    <View className="flex-1 items-center justify-center bg-green-200" style={theme}>
      <Text className="font-bold text-3xl text-[--theme-fg] my-6"> Welcome to Solito !</Text>

      <TextLink href="/user/fernando">Regular Link</TextLink>

    </View>
  );
}

export default TabTwoScreen