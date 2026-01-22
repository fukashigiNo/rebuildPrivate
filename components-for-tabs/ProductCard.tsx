import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export type Product = {
  id: string;
  title: string;
  shop: string;
  price: string;
  rating: number;
  reviews: number;
  favorite: boolean;
  image: string[];
};

type Props = {
  product: Product;
  onToggleFavorite?: (id: string) => void;
};

export default function ProductCard({ product, onToggleFavorite }: Props) {
  const handleFavorite = () => {
    onToggleFavorite?.(product.id);
  };

  return (
    <Link href={`/product/${product.id}`} asChild>
      <TouchableOpacity activeOpacity={0.5} className="flex-1 flex-wrap">
        <View className="flex-1 bg-white rounded-3xl shadow-lg shadow-black/10">
          <View className="p-3 pb-2">
            <View className="overflow-hidden rounded-3xl">
              <Image
                source={{ uri: product.image[0] }}
                className="w-full h-40"
                resizeMode="cover"
              />
              <Pressable
                onPress={handleFavorite}
                className="absolute top-3 right-3 w-11 h-11 rounded-2xl bg-white/90 items-center justify-center"
              >
                <Ionicons
                  name={product.favorite ? "heart" : "heart-outline"}
                  size={22}
                  color={product.favorite ? "#ff3b30" : "#8e8e93"}
                />
              </Pressable>
            </View>
          </View>

          <View className="px-4 pb-5">
            <Text
              className="text-lg leading-6 font-semibold text-black"
              numberOfLines={2}
            >
              {product.title}
            </Text>

            <View className="flex-row items-center mt-2">
              <Text className="text-base font-semibold text-black">
                {product.rating.toFixed(1)}
              </Text>
              <View className="flex-row mx-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  const filled = i < Math.round(product.rating);
                  return (
                    <AntDesign
                      key={i}
                      name="star"
                      size={14}
                      color={filled ? "#0abf53" : "#c7c7cc"}
                      style={{ marginRight: 2 }}
                    />
                  );
                })}
              </View>
              <Text className="text-base text-gray-500">
                ({product.reviews})
              </Text>
            </View>

            <Text className="mt-1 text-base text-gray-500" numberOfLines={1}>
              {product.shop}
            </Text>

            <Text className="mt-3 text-2xl font-semibold text-black">
              {product.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
