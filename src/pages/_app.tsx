import type { AppProps } from "next/app";
import "../common/styles/globals.css";
import BaseLayout from "../common/layouts/basedLayout";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../common/context/darkMode";
import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { isDark } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  return (
    <DarkModeContextProvider>
      <QueryClientProvider client={queryClient}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </QueryClientProvider>
    </DarkModeContextProvider>
  );
}
