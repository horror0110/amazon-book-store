import { Text, View } from "react-native";
import Search from "../components/Search";
import { useState } from "react";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <View>
      <Search onValueChange={setSearchValue} value={searchValue} />
      <Text>{searchValue}</Text>
    </View>
  );
};

export default HomeScreen;
