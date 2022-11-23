import type { AppProps } from "next/app";
import "../common/styles/globals.css";
import BaseLayout from "../common/layouts/basedLayout";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../common/context/darkMode";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { isDark } = useContext(DarkModeContext);

  return (
    <DarkModeContextProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </DarkModeContextProvider>
  );
}
