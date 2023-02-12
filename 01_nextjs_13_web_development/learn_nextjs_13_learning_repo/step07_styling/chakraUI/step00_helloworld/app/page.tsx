'use client';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size='md'>ChakraUI with NextJS</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Box Component
              </Heading>
              <Text pt='2' fontSize='sm'>
                Getting started with chakra UI
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
