import BlogTextInput from '@/Components/Blog/BlogTextInput';
import { Button, Center, Grid, Input, Modal, Space, Stack, TextInput } from '@mantine/core';
import * as React from 'react';
import StandardLayout from '@/Layouts/StandardLayout';
import { IconSection } from '@tabler/icons-react';
import axios from 'axios';

export interface CreateBlogProps {
}

export interface CreateBlogState {
    title: string;
    components: any[];
    confirmModal: any;
}

export default class CreateBlog extends React.Component<CreateBlogProps, CreateBlogState> {
    private idCounter: number;

    constructor(props: CreateBlogProps) {
        super(props);

        this.idCounter = 1;

        this.state = {
            title: "",
            components: [{ id: this.idCounter, text: "" }],
            confirmModal: { open: false }
        };
    }

    openConfirmModal = () => {
        this.setState(() => ({
            confirmModal: { open: true }
        }));
    };

    closeConfirmModal = () => {
        this.setState(() => ({
            confirmModal: { open: false }
        }));
    }

    addSection = () => {
        this.setState((prevState) => ({
            components: [...prevState.components, { id: ++this.idCounter, text: '' }]
        }));
    };

    deleteSection = (id: number) => {
        this.setState((prevState) => ({
            components: prevState.components.filter(a => 
                a.id !== id
            )
        }));
    }

    setTitle = (title: string) => {
        this.setState(() => ({
            title: title
        }))
    }

    setText = (id: number, text: string) => {
        this.setState((prevState) => ({
            components: prevState.components.map((component) => {
                return component.id === id
                    ? { ...component, text: text }
                    : component;
            }),
        }));
    };

    createBlog = () => {
        const payload = {
            title: this.state.title,
            owner: 'testUser',
            content: JSON.stringify(this.state.components.map((component) => component.text)),
        };
    
        axios
            .post('/blogs', payload)
            .then((response) => {
                console.log('Blog created successfully:', response.data);
                return (window.location.href = '/blogs');
            })
            .catch((error) => {
                console.error('Error creating blog:', error.response?.data || error.message);
            });
    };
    

    onChange = (id: number, text: string) => {
        this.setText(id, text)
    }

    public render() {
        return (
            <StandardLayout>
                <Center>
                    <Stack
                        w={"70%"}
                        justify="center"
                        align="stretch"
                    >

                        <TextInput
                            required={true}
                            styles={{input: {textAlign: "center"}}}
                            size="xl"
                            label="Put in your title"
                            placeholder="Header text"
                            onChange={(event) => this.setTitle(event.currentTarget.value)}
                        />
                        <Space h="lg" />
                        {this.state.components.map((component) => (
                            <BlogTextInput
                                key={component.id}
                                onChange={(value: string) => this.onChange(component.id, value)}
                                onDelete={()=>this.deleteSection(component.id)}
                            />
                        ))}

                        <Button
                            onClick={this.addSection}
                            rightSection={<IconSection size={14} />}
                            justify='center'
                            fullWidth={false}
                        >
                            Add new section
                        </Button>
                        <Button
                            onClick={this.openConfirmModal}
                        >
                            Create blog
                        </Button>
                        <Modal 
                            opened={this.state.confirmModal.open} 
                            onClose={this.openConfirmModal} title="Create blog?"
                        >
                            <Button onClick={this.closeConfirmModal} color="red">No</Button>
                            <Button onClick={this.createBlog}color="blue">Yes</Button>
                        </Modal>
                    </Stack>


                </Center>
            </StandardLayout>
        );
    }
}
