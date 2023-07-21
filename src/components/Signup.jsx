import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
    HStack
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';

const Signup = () => {
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
        <Heading>Video Hub</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'} />

        <Input
            placeholder='Enter your name'
            type={'text'}
            required
            focusBorderColor={'purple.500'}
        />

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
        
        <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>

        <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login In</Link>
            </Button>
          </Text>
        </VStack>
    </form>
    </Container>
  )
}

export default Signup


