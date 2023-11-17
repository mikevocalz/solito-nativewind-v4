import { Text, View } from "react-native";
import { MotiLink } from "solito/moti/app";
import { vars } from "nativewind";

const theme = vars({
  "--theme-fg": "red",
});

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200" style={theme}>
      <Text className="font-bold text-3xl text-[--theme-fg]"> Welcome to Solito.</Text>
      <Text className="font-bold my-4 text-[--theme-fg]">Variables!</Text>
      <Text className="font-bold text-xl active:scale-150 active:text-[--theme-fg] transition duration-[500ms]">
        Transitions
      </Text>

      <Text className="font-bold my-8 animate-bounce placeholder:text-white">
        Animations
      </Text>


      <MotiLink
        href="/user/fernando"
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          }
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Text selectable={false} className="text-base font-bold mt-5">
          Moti Link
        </Text>
      </MotiLink>
    </View>
  );
};

export default HomeScreen;
