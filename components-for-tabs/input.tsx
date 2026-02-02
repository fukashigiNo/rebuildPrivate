import { Text, TextInput, View } from "react-native";

interface IProps {
  header: string;
  inputPlaceholder: string;
  textStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  errorMessage?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function Inputs({
  header,
  inputPlaceholder,
  textStyle,
  containerStyle,
  inputStyle,
  errorMessage,
  value,
  onChangeText,
}: IProps) {
  return (
    <View className={`px-5 ${containerStyle}`}>
      <Text className={textStyle}>{header}</Text>
      {errorMessage ? (
        <Text className="text-red-500 mt-4">{errorMessage}</Text>
      ) : null}
      <TextInput
        className={` bg-white rounded-xl px-4 py-4 mt-2 mb-4 ${inputStyle}`}
        placeholder={inputPlaceholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
