import { StyleProp, ViewStyle } from "react-native";
import { TabBar } from "react-native-tab-view";

interface CustomTabBarProps {
  props: any; // Пропсы от TabView
  activeColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const RenderTab = ({
  props,
  activeColor = "#3b82f6", // Дефолтный синий
  containerStyle,
}: CustomTabBarProps) => (
  <TabBar
    {...props}
    style={[
      {
        backgroundColor: "white",
        borderRadius: 24,
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 10,
        elevation: 0,
        shadowOpacity: 0,
        height: 50,
      },
      containerStyle,
    ]}
    indicatorStyle={{
      backgroundColor: activeColor, // Красим полоску
      opacity: 0,
    }}
    activeColor={activeColor} // Красим текст активной вкладки
    inactiveColor="#000000"
    labelStyle={{
      textTransform: "none",
      fontWeight: "600",
      fontSize: 16,
    }}
    pressColor="transparent"
  />
);
