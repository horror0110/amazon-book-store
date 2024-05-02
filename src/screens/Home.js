import { Text, View } from "react-native";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://amazon-rest-api.vercel.app/api/v1/categories"
        );

        const data = response.data.data;

        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const onSearch = async () => {
    console.log("searching..");
  };
  return (
    <View className="">
      <Search
        onValueChange={setSearchValue}
        value={searchValue}
        onFinishEnter={onSearch}
      />

      <View className="mx-5 flex flex-col gap-y-3   ">
        {categories.map((category) => {
          return (
            <View className="" key={category.id}>
              <Text className="font-bold text-lg">{category.name}</Text>

              <Text>{category.description}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default HomeScreen;
