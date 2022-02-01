import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from "../../components/Form/Input";
import Link from 'next/link';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório').trim(),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatório').min(6, 'No minimo 6 caracteres'),
    passwordConfirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ],
        'As senhas precisam ser iguais'
    )
});

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (user: CreateUserFormData, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(user);
    }

    return (
        <Box>
            <Header />
            <Flex
                width="100%"
                maxWidth={1480}
                mx="auto"
                my="6"
                px="6"
                as="form"
                onSubmit={handleSubmit(handleCreateUser)}
            >
                <Sidebar />
                <Box
                    flex="1"
                    borderRadius={8} backgroundColor="gray.800" p={["6", "8"]}
                >


                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Criar usuário
                    </Heading>

                    <Divider my={[4, 6]} borderColor="gray.700" />

                    <VStack
                        spacing={8}
                    >

                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={[6, 8]}
                            width="100%"
                        >

                            <Input name='name' label='Nome Completo' {...register('name')} error={formState.errors.name} />
                            <Input name='email' label='Email' type="email" {...register('email')} error={formState.errors.email} />
                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={[6, 8]}
                            width="100%"
                        >

                            <Input name='password' label='Senha' type="password" {...register('password')} error={formState.errors.password} />
                            <Input name='password_confirmation' label='Confirme sua Senha' type="password" {...register('passwordConfirmation')} error={formState.errors.passwordConfirmation} />
                        </SimpleGrid>

                    </VStack>

                    <Flex mt={8} justify="flex-end">
                        <HStack spacing={[2, 4]}>
                            <Link href='/users'>
                                <Button
                                    colorScheme="whiteAlpha"
                                    disabled={formState.isSubmitting}
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                colorScheme="pink"
                                type='submit'
                                isLoading={formState.isSubmitting}>
                                Salvar
                            </Button>

                        </HStack>


                    </Flex>

                </Box>

            </Flex >
        </Box >
    )
}