import { Pressable, Text, View } from "react-native";
import { ThemedText } from "../themed-text";

interface IProps {
  textHeader: string;
  textButton: string;
  schoolName: string;
  text: string;
  nameTeacher: string;
  price: number;
  containerStyle?: string;
  subContainerStyle?: string;
  textStyle?: string;
  buttonStyle?: string;
}

export default function CourseArea({
  textHeader,
  textButton,
  text,
  schoolName,
  nameTeacher,
  price,
  containerStyle,
  subContainerStyle,
  textStyle,
  buttonStyle,
}: IProps) {
  const textClasses = textStyle === "" ? "text-base text-black" : textStyle;
  const containerClass =
    containerStyle === "" ? "width-full flex" : containerStyle;
  const subContainerClass =
    subContainerStyle === ""
      ? "flex-row justify-between items-center border-t border-black py-4"
      : subContainerStyle;

  return (
    <View className={containerClass}>
      <View>
        <ThemedText>{textHeader}</ThemedText>
        <ThemedText>{schoolName}</ThemedText>
      </View>
      <View>
        <ThemedText>{text}</ThemedText>
        <ThemedText>{nameTeacher}</ThemedText>
      </View>
      <View className={subContainerClass}>
        <ThemedText>{price}</ThemedText>
        <Pressable className={buttonStyle}>
          <Text className={textClasses}>{textButton}</Text>
        </Pressable>
      </View>
    </View>
  );
}
