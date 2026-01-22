import { Pressable, Text, View } from 'react-native';

export function ActionButtons() {
  return (
    <View className="flex-row gap-3 mb-8 px-5">
      <Pressable className="flex-1 bg-gray-100 py-4 rounded-3xl items-center">
        <Text className="text-base font-semibold text-black">Позвонить</Text>
      </Pressable>
      <Pressable className="flex-1 bg-gray-100 py-4 rounded-3xl items-center">
        <Text className="text-base font-semibold text-black">Написать</Text>
      </Pressable>
    </View>
  );
}
