import { Text, View } from 'react-native';

type Props = {
  title: string;
  price: string;
  category?: string;
};

export function ProductInfo({ title, price, category = 'Мебель' }: Props) {
  return (
    <View className="px-5 mb-6">
      <View className="bg-gray-100 self-start px-4 py-2 rounded-full mb-3">
        <Text className="text-gray-600">{category}</Text>
      </View>

      <Text className="text-2xl font-semibold text-black mb-2">{title}</Text>

      <Text className="text-2xl font-bold text-black">{price}</Text>
    </View>
  );
}
