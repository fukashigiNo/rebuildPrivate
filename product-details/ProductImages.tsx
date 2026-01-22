import { useRef, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import SlideComponent from "../components-for-tabs/SlideComponent";

type Props = {
  images: string[];
};

export function ProductImages({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  if (!images || images.length === 0) {
    return (
      <View className="w-full h-80 bg-gray-100 mb-4 rounded-b-[32px] overflow-hidden" />
    );
  }

  return (
    <View>
      <View className="w-full h-80 bg-gray-100 mb-4 rounded-b-[32px] overflow-hidden">
        <SlideComponent
          ref={carouselRef}
          images={images}
          onSnapToItem={(index) => setCurrentIndex(index)}
        />
      </View>

      <View className="flex-row gap-3 mb-6 px-5 ">
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              carouselRef.current?.scrollTo({ index, animated: true });
              setCurrentIndex(index);
            }}
            className={`w-20 h-20 border rounded-2xl p-1 ${
              index === currentIndex ? "border-blue-700" : "border-gray-200"
            }`}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="mb-6"
              contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
            >
              <Image
                source={{ uri: img }}
                className="w-full h-full rounded-xl"
              />
            </ScrollView>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
