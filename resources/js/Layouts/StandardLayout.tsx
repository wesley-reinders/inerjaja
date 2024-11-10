import { AppShell, Burger, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PropsWithChildren } from 'react';

export function StandardLayout({children}: PropsWithChildren) {
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
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Inerjaja</div>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}