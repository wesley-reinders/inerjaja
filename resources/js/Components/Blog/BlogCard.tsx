import { Card, Image, Group, Text, Badge, Button } from '@mantine/core';
import * as React from 'react';

export interface IBlogCardProps {
    blog: {title: string}
}

export function BlogCard (props: IBlogCardProps) {
  return (
<Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://picsum.photos/200"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.blog.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Read
      </Button>
    </Card>
  );
}
