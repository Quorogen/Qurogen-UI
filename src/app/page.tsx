import { Demo } from '@/shared/components/demo';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box w={'100vw'} height={'100vh'} bg={'primary'}>
      <Demo />
    </Box>
  );
}
