import { useValidation } from "@/hooks/useValidation";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmPassword,
  setErrors,
  setInn,
  setNsf,
  setPassword,
} from "../store/auth/regSlice";
import Inputs from "./input";
import PressableButton from "./Pressable";
import RoleList from "./RoleList";

export const dropdownStyles = {
  position: "absolute",
  top: 50,
  borderRadius: 12,
  zIndex: 1000,
  backgroundColor: "white",
  width: "100%",
};

export const boxStyles = {
  borderRadius: 12,
  borderColor: "#E5E7EB",
  backgroundColor: "white",
  width: "100%",
};

export default function RegistationScreen() {
  const { inn, nsf, password, confirmPassword, errors } = useSelector(
    (state: any) => state.reg,
  );
  const dispath = useDispatch();
  const {
    validateInn,
    validateNsf,
    validatePassword,
    validateConfirmPassword,
  } = useValidation();

  const handleRegister = () => {
    const innError = validateInn(inn);
    const nsfError = validateNsf(nsf);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword,
    );

    if (innError || nsfError || passwordError || confirmPasswordError) {
      dispath(
        setErrors({ innError, nsfError, passwordError, confirmPasswordError }),
      );
      return;
    }
  };
  return (
    <View>
      <RoleList
        searchbar={false}
        placeholder="Выберите вашу роль"
        dropdownStyles={dropdownStyles}
        boxStyles={boxStyles}
      />

      <View className="">
        <Inputs
          header="INN"
          inputPlaceholder="Enter your INN"
          value={inn}
          onChangeText={(text) => dispath(setInn(text))}
          errorMessage={errors.innError}
        />
        <Inputs
          header="NSF"
          inputPlaceholder="Enter Your NSF"
          value={nsf}
          onChangeText={(text) => dispath(setNsf(text))}
          errorMessage={errors.nsfError}
        />
        <Inputs
          header="Password"
          inputPlaceholder="Enter your password"
          value={password}
          onChangeText={(text) => dispath(setPassword(text))}
          errorMessage={errors.passwordError}
        />
        <Inputs
          header="Confirm Password"
          inputPlaceholder="Confirm your password"
          value={confirmPassword}
          onChangeText={(text) => dispath(setConfirmPassword(text))}
          errorMessage={errors.confirmPasswordError}
        />
      </View>

      <PressableButton
        buttonText="Register"
        buttonStyle="w-4/5 mx-auto mt-10"
        onPress={handleRegister}
      />

      <View></View>
    </View>
  );
}
