import Head from "next/head";
import { Image, Box, Text, Highlight, Flex, Heading } from "@chakra-ui/react";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve("price_1LktekD8uToFvuJtKVXmY3iZ"); /** {
        expand: ["product"],
    } */

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price.unit_amount / 100),
        /**
         * Extender informações do produto.
         * price.product
         */
    };

    return {
        props: {
            product,
        },
        revalidate: 60 * 60 * 24, //24hrs
    };
};

interface HomeProps {
    product: {
        priceId: string;
        amount: number;
    };
}

export default function Home({ product }: HomeProps) {
    const textHilight = "for " + String(product.amount) + " month";
    return (
        <>
            <Head>
                <title>Mind news | Início</title>
            </Head>
            <Flex align="center" justify="space-between" maxW="1120px" m="0 auto" p="0 2rem" height="calc(100vh - 5rem)">
                <Box maxW="600px" color="white">
                    <Text fontSize="1.3rem" fontWeight="bold">
                        👋 Hey, welcome
                    </Text>
                    <Heading fontSize="4rem" lineHeight="4.5rem" fontWeight="900" mt="2.5rem">
                        <Highlight query="Mind Group" styles={{ color: "pink.900" }}>
                            News about the Mind Group world
                        </Highlight>
                    </Heading>
                    <Text fontSize="1.5rem" lineHeight="2.25rem" marginTop="1.5rem">
                        Get access to all the publications <br />
                        <Highlight query={textHilight} styles={{ color: "pink.900", fontWeight: "bold" }}>
                            {textHilight}
                        </Highlight>
                    </Text>
                    <SubscribeButton priceId={product.priceId} mt="2.5rem" />
                </Box>
                <Image src="/GirlCoding.png" w="500px" alt="Girl coding" />
            </Flex>
        </>
    );
}
