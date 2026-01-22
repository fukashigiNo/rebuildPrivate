import { forwardRef } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

type Props = {
  images: string[];
  width?: number;
  height?: number;
  onSnapToItem?: (index: number) => void;
};

const SlideComponent = forwardRef<ICarouselInstance, Props>(
  ({ images, width, height, onSnapToItem }, ref) => {
    const windowWidth = Dimensions.get("window").width;
    const finalWidth = width || windowWidth;
    const finalHeight = height || 320;

    return (
      <Carousel
        ref={ref}
        width={finalWidth}
        height={finalHeight}
        data={images}
        autoPlay={false}
        onSnapToItem={onSnapToItem}
        renderItem={({ item }) => (
          <View className="flex-1 justify-center overflow-hidden">
            <Image
              source={{ uri: item }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        )}
      />
    );
  },
);

export default SlideComponent;
