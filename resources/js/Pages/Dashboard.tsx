import React, { useState, FC } from 'react';
import BlogTextInput from '@/Components/Blog/BlogTextInput';
import { StandardLayout } from '@/Layouts/StandardLayout';
import { Button, Center, Grid, Input, Space, Stack, TextInput } from '@mantine/core';
import { IconSection } from '@tabler/icons-react';

const initialComponents: FC[] = [BlogTextInput];

export default function Dashboard() {
    const [components, setComponents] = useState<FC[]>(initialComponents);

    const addComponent = (NewComponent: FC) => {
        setComponents((prevComponents) => [...prevComponents, NewComponent]);
    };

    const addSection = () => {
        console.log("Adding a new section");
        addComponent(BlogTextInput);
    };

    return (
        <StandardLayout>
            <Center>
                <Stack
                    w={500}
                    justify="center"
                    align="stretch"
                >
                   
                        <TextInput
                            label="Put in your title"
                            placeholder="Header text"
                        />
                        <Button>Choose header image</Button>
                        <Space h="lg"/>
                        {components.map((Component, index) => (
                            <Component key={index} />

                        ))}
                    

                    <Button
                        onClick={addSection}
                        rightSection={<IconSection size={14} />}
                    >
                        Add new section
                    </Button>
                </Stack>
            </Center>
        </StandardLayout>
    );
}
