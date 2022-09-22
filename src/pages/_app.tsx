import { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "",
            },
        }),
    },
    colors: {
        gray: {
            100: "##e1e1e6",
            300: "#a8a8b3",
            800: "#29292e",
            850: "#1f2729",
            900: "#121214",
        },
        cyan: {
            500: "#61dafb",
        },
        yellow: {
            500: "#eba417",
        },
        pink: {
            900: "#dc1e45",
        },
    },
});
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
