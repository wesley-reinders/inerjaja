import { AppShell, Burger, Button, Center, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PropsWithChildren } from 'react';

export default function StandardLayout({children}: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
    //   navbar={{
    //     width: 300,
    //     breakpoint: 'sm',
    //     collapsed: { mobile: !opened },
    //   }}
      padding="md"
    >
      <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <a href="/blogs">Inerjaja</a>
        <Button onClick={() => window.location.href='/blogs/create'}>Create Blog</Button>
      </Group>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}