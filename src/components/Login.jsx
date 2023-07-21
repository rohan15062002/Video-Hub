import {
    Button,
    Container,
    Heading,
    HStack,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container minH={'100vh'} p={'16'} maxW={'container.xl'}>
    <form>
        <VStack
        alignItems={'stretch'}
        w={['full','96']}
        m='auto'
        my='16'
        spacing={'8'}
        >
        <Heading>Welcome Back</Heading>
        <Input
            type={'email'}
            required
            placeholder='Enter your email'
            focusBorderColor={'purple.500'}
        />

        <Input
            placeholder='Enter your password'
            type={'password'}
            required
            focusBorderColor={'purple.500'}
        />
        <Button alignSelf={'flex-end'} variant={'link'} >
        <Link to={'/forgetpassword'}>Forget Password?</Link>
        </Button>
        
        <Button colorScheme={'purple'} type={'submit'}>Log In</Button>

        <HStack alignSelf={'flex-end'}>
            <Text>New User? {" "}</Text>
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
        </HStack>
        
        </VStack>
    </form>
    </Container>
  )
}

export default Login

