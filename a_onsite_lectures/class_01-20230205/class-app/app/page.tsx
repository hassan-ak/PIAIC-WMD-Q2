'use client';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg='green.400' minH='100vh' minW='100vw' p='10'>
      <Box
        maxW={'500px'}
        m='auto'
        textAlign={'center'}
        bg='gray.50'
        py='10'
        borderRadius={'3xl'}
        fontSize='2xl'
        fontWeight={'bold'}
      >
        WMD Q2 Class-01
      </Box>
    </Box>
  );
}
