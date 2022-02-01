import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center">
            {
                showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Léo Santos</Text>
                        <Text fontSize="small" color="gray.300">leo.santos@gmail.com</Text>
                    </Box>)
            }

            <Avatar
                size="md"
                name='Léo Santos'
                src='https://avatars.githubusercontent.com/u/24196945?s=400&u=9864307bc5ad7a1e0286c3328d52f8522658d348&v=4' />
        </Flex>
    );
}