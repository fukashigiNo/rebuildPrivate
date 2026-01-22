import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type Props = {
  shopName: string;
};

export function ShopInfo({ shopName }: Props) {
  return (
    <View className="px-5 pb-8">
      <View className="bg-gray-100 p-4 rounded-[24px] flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View className="w-12 h-12 bg-white rounded-full items-center justify-center">
            <Ionicons name="home" size={20} color="#e58e26" />
          </View>
          <Text className="text-lg font-medium text-black">{shopName}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </View>
  );
}
