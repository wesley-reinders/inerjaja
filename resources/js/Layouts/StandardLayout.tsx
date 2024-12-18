import { AppShell, Burger, Button, Center, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";

export default function StandardLayout({ children }: PropsWithChildren) {
    const [opened, { toggle }] = useDisclosure();


    function logout() {
        axios
            .post('/logout')
            .then((data) => {
                window.location.href = '/'
            })
    }

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
                <Group justify="space-between" m='sm'>
                    <Group h="100%" px="md">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <a href="/blogs">Inerjaja</a>
                        <Button
                            onClick={() => Inertia.visit(route("blogs.create"))}
                        >
                            Create Blog
                        </Button>
                    </Group>
                    <Button onClick={logout}>Logout</Button>
                </Group>
            </AppShell.Header>

            {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
