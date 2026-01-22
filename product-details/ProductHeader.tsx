import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';

type Props = {
  isFavorite: boolean;
  onToggleFavorite?: () => void;
};

export function ProductHeader({ isFavorite, onToggleFavorite }: Props) {
  const router = useRouter();
  
  return (
    <View className="flex-row justify-between items-center px-5 py-2 absolute z-10 w-full top-12">
      <Pressable
        onPress={() => router.back()}
        className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>
      <Pressable 
        onPress={onToggleFavorite}
        className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
      >
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorite ? 'red' : 'black'}
        />
      </Pressable>
    </View>
  );
}
