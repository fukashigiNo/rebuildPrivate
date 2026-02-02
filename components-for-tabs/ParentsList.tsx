import { Text, View } from "react-native";
import RoleList from "./RoleList";

interface Props {
  title: string;
  subtitle?: string;
  containerClassName?: string;
}

export default function ParentsList({
  title,
  subtitle,
  containerClassName,
}: Props) {
  return (
    <View
      className={`w-full rounded-[32px] p-6 mt-6 ${
        containerClassName || "bg-[#4ADE80]"
      }`}
    >
      <Text className="text-white text-2xl font-bold mb-1">{title}</Text>
      <Text className="text-white text-base opacity-80 mb-6">{subtitle}</Text>

      <View className="mb-2 z-50">
        <Text className="text-white text-sm mb-2">Выберите ребенка:</Text>
        <RoleList
          searchbar={false}
          placeholder="Джефри Младший (9А)"
          boxStyles={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderWidth: 0,
            borderRadius: 12,
            paddingVertical: 12,
          }}
          inputStyles={{ color: "white", fontWeight: "600", fontSize: 15 }}
          dropdownStyles={{
            backgroundColor: "white",
            position: "absolute",
            top: 55,
            width: "100%",
            borderRadius: 12,
            zIndex: 1000,
            borderWidth: 0,
          }}
          dropdownTextStyles={{ color: "#1F2937", fontSize: 15 }}
        />
      </View>
    </View>
  );
}
