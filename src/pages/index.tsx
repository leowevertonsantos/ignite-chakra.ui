import { Button, Flex, FormControl, FormLabel, Stack, Text, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from "../components/Form/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Logo } from '../components/Header/Logo';





type SignInFormData = {
  email: string,
  password: string
}

// Criando o formato do objeto para o formulário de Login.
const SigninFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória')
});







export default function Home() {


  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SigninFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (formData: SignInFormData, event) => {
    console.log(formState);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(formData.email);
  }




  return (
    <Flex
      w='100vw'
      h='100vh'
      direction={["column", "row"]}
      alignItems='center'
      justifyContent='center'>

      <Stack alignItems="start" pb={[8, 0]}>
        <Logo />
        <Text > React project by <strong>Rocketseat</strong></Text>
      </Stack>

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing={4}>
          <Input name='email' type="email" label='Email' {...register('email')} error={formState.errors.email} />
          <Input name='password' type="password" label='Senha' {...register('password')} error={formState.errors.password} />
        </Stack>

        <Button
          type='submit'
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}

        >Entrar</Button>
      </Flex>
    </Flex >
  );
}
