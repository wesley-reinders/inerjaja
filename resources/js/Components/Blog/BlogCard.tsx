import { Card, Image, Group, Text, Badge, Button } from "@mantine/core";

export interface IBlogCardProps {
    blog: { id: number; title: string; readable_created_at: string };
}

export function BlogCard(props: IBlogCardProps) {


    

    return (
        <Card shadow="sm" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://picsum.photos/200"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>
            <Badge
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
            >
                Posted
            </Badge>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.blog.title}</Text>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
            </Text>

            <p>{props.blog.readable_created_at}</p>

            <Button.Group>
                <Button
                    onClick={() =>
                        (window.location.href = `/blogs/${props.blog.id}/edit`)
                    }
                    m={"1rem"}
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                >
                    Edit
                </Button>
                <Button m={"1rem"} color="red" fullWidth mt="md" radius="md">
                    Delete
                </Button>
            </Button.Group>
        </Card>
    );
}
