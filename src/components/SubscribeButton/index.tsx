import { Button, ButtonProps } from "@chakra-ui/react";

interface SbuscribeButtonProps extends ButtonProps {
    priceId: string;
}

export function SubscribeButton(props: SbuscribeButtonProps) {
    const { ...rest } = props;
    return (
        <Button
            w="268px"
            h="4rem"
            border="0"
            borderRadius="3rem"
            bg="pink.900"
            color="gray.900"
            fontSize="1.25rem"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ filter: "brightness(0.7)" }}
            _active={{
                transform: "scale(0.98)",
            }}
            transition="all 0.2s"
            {...rest}
        >
            Subscribe now
        </Button>
    );
}
