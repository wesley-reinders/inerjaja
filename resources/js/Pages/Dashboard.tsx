import React, { useState, FC } from 'react';
import BlogTextInput from '@/Components/Blog/BlogTextInput';
import { StandardLayout } from '@/Layouts/StandardLayout';
import { Button, Center, Input, Stack, TextInput } from '@mantine/core';
import { IconSection } from '@tabler/icons-react';

// Array of component types for reuse
const initialComponents: FC[] = [];

export default function Dashboard() {
    // State to hold dynamically added components with proper typing
    const [components, setComponents] = useState<FC[]>(initialComponents);

    // Function to add a new component to the components array
    const addComponent = (NewComponent: FC) => {
        setComponents((prevComponents) => [...prevComponents, NewComponent]);
    };

    // Handler to add a new BlogTextInput section
    const addSection = () => {
        console.log("Adding a new section");
        addComponent(BlogTextInput);
    };

    return (
        <StandardLayout>
            <Center>
                <Stack
                    h={300}
                    justify="center"
                    align="stretch"
                >
                    {/* Title input */}
                    <TextInput
                        label="Put in your title"
                        placeholder="Header text"
                    />

                    {/* Render dynamic components */}
                    {components.map((Component, index) => (
                        <Component key={index} />
                    ))}

                    {/* Button to add new section */}
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
