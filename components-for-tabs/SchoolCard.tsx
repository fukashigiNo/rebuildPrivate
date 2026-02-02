import { Text, View } from "react-native";

interface InfoItem {
  id: string | number;
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  items: InfoItem[];
  containerClassName?: string;
}

export default function SchoolCard({
  title,
  items,
  containerClassName,
}: Props) {
  return (
    <View
      className={`w-full rounded-[32px] p-6 ${containerClassName || "bg-blue-600"}`}
    >
      <Text className="text-white text-2xl font-bold mb-6">{title}</Text>

      <View className="flex-row justify-between">
        {items.map((item) => (
          <View key={item.id}>
            <Text className="text-white text-sm font-medium mb-2 opacity-80 leading-tight">
              {item.label}
            </Text>
            <Text className="text-white text-4xl font-bold">{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
