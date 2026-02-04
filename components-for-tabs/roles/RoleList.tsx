import { useState } from "react";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

interface IRole {
  key: string;
  value: string[];
}

type Props = {
  roles?: IRole[];
  searchbar?: boolean;
  placeholder?: string;
  dropdownStyles?: object;
  boxStyles?: object;
  inputStyles?: object;
  dropdownTextStyles?: object;
};

const roles = [
  { key: "1", value: "Школьник" },
  { key: "2", value: "Учитель" },
  { key: "3", value: "Родитель" },
  { key: "4", value: "Завуч/Директор" },
];

export default function RoleList({
  searchbar,
  placeholder,
  dropdownStyles,
  boxStyles,
  inputStyles,
  dropdownTextStyles,
}: Props) {
  const [selected, setSelected] = useState("");

  return (
    <View className="w-full">
      <SelectList
        setSelected={setSelected}
        data={roles}
        placeholder={placeholder}
        search={searchbar}
        dropdownStyles={dropdownStyles}
        boxStyles={boxStyles}
        inputStyles={inputStyles}
        dropdownTextStyles={dropdownTextStyles}
      />
    </View>
  );
}
