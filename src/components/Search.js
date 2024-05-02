import { View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Search = ({ onValueChange, value, onFinishEnter }) => {
  return (
    <View className="h-[50px] bg-[#99AAAB] mx-5 border rounded-md flex flex-row my-5 ">
      <View className="self-center text-white mx-2">
        <Feather name="search" color="#535c68" size={30} />
      </View>

      <TextInput
        onChangeText={onValueChange}
        placeholder="Хайх"
        className="text-white text-lg flex-1 "
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#DAE0E2"
        value={value}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};
export default Search;
