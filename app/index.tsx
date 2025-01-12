import { Text, TouchableOpacity, View } from "react-native";

import { api } from "@/utils/api";

export default function Home() {
  const { data, mutate } = api.hello.useSWR({ id: "hello" });

  const { trigger } = api.create.useSWRMutation();

  return (
    <View>
      <Text>{data}</Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => trigger({ name: "" }).then(() => mutate())}
      >
        <Text>Create</Text>
      </TouchableOpacity>
    </View>
  );
}
