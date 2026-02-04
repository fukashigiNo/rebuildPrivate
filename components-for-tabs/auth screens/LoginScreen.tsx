import { useValidation } from "@/hooks/useValidation";
import { Link } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  setErrors,
  setLogin,
  setPassword,
} from "../../store/auth/authSlice";
import Inputs from "../Inputs/input";
import PressableButton from "../Pressable";

export default function LoginScreen() {
  const { login, password, errors, isAuthenticated } = useSelector(
    (state: any) => state.auth,
  );
  const dispatch = useDispatch();
  const { validateLogin, validatePassword } = useValidation();

  const handleLogin = () => {
    const loginError = validateLogin(login);
    const passwordError = validatePassword(password);

    if (loginError || passwordError) {
      dispatch(setErrors({ loginError, passwordError }));
      return;
    }
  };

  const onPressRegister = () => {
    dispatch(loginSuccess(false));
  };

  return (
    <View>
      <View className="p-10">
        <Text className="text-3xl text-center">LogIn in system</Text>
        <Text className="text-center">Enter your credentials</Text>
      </View>

      <View className="py-4">
        <Inputs
          header="login"
          inputPlaceholder="Enter your logins"
          value={login}
          onChangeText={(text) => dispatch(setLogin(text))}
          errorMessage={errors.loginError}
        />
        <Inputs
          header="password"
          inputPlaceholder="Enter your password"
          value={password}
          onChangeText={(text) => dispatch(setPassword(text))}
          errorMessage={errors.passwordError}
        />
      </View>

      <PressableButton
        buttonText="Log In"
        buttonStyle="w-4/5 mx-auto mt-10"
        onPress={handleLogin}
      />

      <View className="flex-row justify-center mt-5">
        <Text className="text-center">Dont have an account?</Text>
        <Link href="/registration" asChild>
          <Pressable onPress={onPressRegister}>
            <Text className="text-blue-600"> Register</Text>
          </Pressable>
        </Link>
      </View>

      <StatusBar translucent={true} barStyle="dark-content" />
    </View>
  );
}
