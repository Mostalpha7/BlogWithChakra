import Head from 'next/head'
import Container from '../components/Container'
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react'

export default function Index () {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Mustapha A. Abidoun </title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={3}>Hi, I'm Mustapha A. Abiodun</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            beatae. Dicta eligendi excepturi at veniam laborum, eum, neque
            nostrum commodi iure rem vitae consequatur culpa, libero veritatis
            aut accusantium inventore.
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}
