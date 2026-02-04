import "@/global.css";
import * as React from "react";
import { StyleProp, useWindowDimensions, ViewStyle } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { RenderTab } from "./RenderTab";
import { DairySection, ReateSection, ScheduleSection } from "./tabs/ScrollTabs";

const FirstRoute = () => <DairySection />;
const SecondRoute = () => <ScheduleSection />;
const ThirdRoute = () => <ReateSection />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

interface IProps {
  activeTabColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  routes?: { key: string; title: string }[];
}

export default function ScrollSwipe({
  activeTabColor,
  containerStyle,
  routes: propRoutes,
}: IProps) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState(
    propRoutes || [
      { key: "first", title: "Дневник" },
      { key: "second", title: "Расписание" },
      { key: "third", title: "Оценки" },
    ],
  );

  const renderCustomTabBar = (props: any) => (
    <RenderTab
      props={props}
      activeColor={activeTabColor}
      containerStyle={containerStyle}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderCustomTabBar}
      className="bg-white"
    />
  );
}
