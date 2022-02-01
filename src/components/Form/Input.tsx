import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { ForwardedRef, forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>
) => {
    return <FormControl
        isInvalid={!!error}
    >
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
            name={name}
            id={name}
            focusBorderColor='pink.500'
            backgroundColor="gray.900"
            variant="filled"
            ref={ref}
            _hover={{
                bgColor: 'gray.900'
            }} size="lg" {...rest} />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
}

export const Input = forwardRef(InputBase);