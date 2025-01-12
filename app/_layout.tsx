import * as SplashScreen from "expo-splash-screen";

import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { api } from "@/utils/api";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [client] = useState(api.createClient());

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <api.Provider client={client}>
      <api.SWRConfig value={{ keepPreviousData: true }}>
        <Stack />
      </api.SWRConfig>
    </api.Provider>
  );
}
