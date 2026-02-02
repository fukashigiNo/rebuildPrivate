import "@/global.css";
import { Pressable, Text } from "react-native";

interface IProps {
  buttonText: string;
  buttonStyle?: string;
  textStyle?: string;
  onPress: () => void;
}

export default function PressableButton({
  buttonText,
  buttonStyle,
  textStyle,
  onPress,
}: IProps) {
  return (
    <Pressable
      className={`bg-blue-600 py-4 rounded-3xl items-center ${buttonStyle}`}
      onPress={onPress}
    >
      <Text className={`text-base font-semibold text-white ${textStyle}`}>
        {buttonText}
      </Text>
    </Pressable>
  );
}
