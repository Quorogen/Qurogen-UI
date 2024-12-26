import { Card, For, Stack } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const Demo = () => {
  return (
    <Stack gap="4" direction="row" wrap="wrap">
      <For each={['subtle', 'outline', 'elevated']}>
        {(variant) => (
          <Card.Root width="sm" p={8} variant={variant} key={variant}>
            <Card.Body gap="2">
              <Avatar
                src="https://picsum.photos/200/300"
                name="Nue Camp"
                size="lg"
                shape="rounded"
              />
              <Card.Title mb="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View all</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>
        )}
      </For>
    </Stack>
  );
};
