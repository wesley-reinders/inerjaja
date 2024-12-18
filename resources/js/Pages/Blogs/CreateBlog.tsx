import React, { useState } from 'react';
import { Button, Center, Modal, Space, Stack, TextInput } from '@mantine/core';
import { IconSection } from '@tabler/icons-react';
import axios from 'axios';
import StandardLayout from '@/Layouts/StandardLayout';
import BlogTextInput from '@/Components/Blog/BlogTextInput';
import {Inertia} from '@inertiajs/inertia';
import ConfirmModal  from '@/Components/ConfirmModal';

export interface CreateBlogProps {
    blog: { id: number, title: string; content: string[] };
    edit: boolean;
}

export function CreateBlog(props: CreateBlogProps) {
    const [title, setTitle] = useState(props.blog?.title || '');
    const [components, setComponents] = useState(
        props.blog?.content?.map((textContent, index) => ({
            id: index + 1,
            text: textContent || '',
            delete: true,
        })) || [{ id: 1, text: '', delete: false }]
    );
    const [confirmModal, setConfirmModal] = useState(false);

    const addSection = () => {
        setComponents((prevComponents) => [
            ...prevComponents,
            { id: prevComponents.length + 1, text: '', delete: true },
        ]);
    };

    const deleteSection = (id: number) => {
        setComponents((prevComponents) =>
            prevComponents.filter((component) => component.id !== id)
        );
    };

    const setText = (id: number, text: string) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, text } : component
            )
        );
    };

    const editBlog = () => {
        const payload = {
            title,
            owner: 'testUser',
            content: components.map((component) => component.text),
        };

        axios
            .patch(`/blogs/${props.blog.id}`, payload)
            .then((response) => {
                console.log('Blog edited successfully:', response.data);
                window.location.href = '/blogs';
            })
            .catch((error) => {
                console.error('Error creating blog:', error.response?.data || error.message);
            });
    }

    const createBlog = () => {
        const payload = {
            title,
            owner: 'testUser',
            content: components.map((component) => component.text),
        };

        axios
            .post('/blogs', payload)
            .then((response) => {
                console.log('Blog created successfully:');
                window.location.href = '/blogs';
            })
            .catch((error) => {
                console.error('Error creating blog:', error.response?.data || error.message);
            });
    };


    return (
        <StandardLayout>
            <Center>
                <Stack w="70%" justify="center" align="stretch">
                    <TextInput
                        required
                        styles={{ input: { textAlign: 'center' } }}
                        size="xl"
                        label="Put in your title"
                        placeholder="Header text"
                        value={title}
                        onChange={(event) => setTitle(event.currentTarget.value)}
                    />
                    <Space h="lg" />
                    {components.map((component) => (
                        <BlogTextInput
                            key={component.id}
                            onChange={(value: string) => setText(component.id, value)}
                            onDelete={() => deleteSection(component.id)}
                            delete={component.delete}
                            initialValue={component.text}
                        />
                    ))}

                    <Button
                        onClick={addSection}
                        rightSection={<IconSection size={14} />}
                        justify="center"
                        fullWidth={false}
                    >
                        Add new section
                    </Button>
                    { props.edit ?
                        <Button onClick={() => setConfirmModal(true)}>Edit blog</Button>
                        :
                        <Button onClick={() => setConfirmModal(true)}>Create blog</Button>
                    }
                    <ConfirmModal
                        opened={confirmModal}
                        onConfirm={props.edit ? editBlog : createBlog}
                        onClose={() => setConfirmModal(false)}
                        title={props.edit ? 'Edit blog' : 'Create blog'}
                        description='Are you sure you want to do this?'
                    >
                    </ConfirmModal>
                </Stack>
            </Center>
        </StandardLayout>
    );
};

export default CreateBlog;
