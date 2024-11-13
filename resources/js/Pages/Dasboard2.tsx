import BlogTextInput from '@/Components/Blog/BlogTextInput';
import { Inertia } from '@inertiajs/inertia';
import * as React from 'react';

export interface DashboardProps {
}

export interface DashboardState {
    components: any[];
}

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
    private idCounter: number;

    constructor(props: DashboardProps) {
        super(props);
        
        this.idCounter = 1;

        this.state = {
            components: [{id: this.idCounter, text: ""}]
        };
    }

    addSection = () => {
        console.log("Adding a new section");

        this.setState((prevState) => ({
            components: [...prevState.components, {id: ++this.idCounter, text: ''}]
        }));
    };

    setText = (id: number, text: string) => {
        this.setState((prevState) => ({
            components: prevState.components.map((component) => {
                console.log("Current component ID:", text);
                return component.id === id
                    ? { ...component, text: text } // Only update text for the matching ID
                    : component;
            }),
        }));
    };

    createBlog = () => {
        Inertia.post(route('blogs.create'), { title: 'test', owner: 'testUser', content: JSON.stringify(['test']) });
    }

    onChange= (id: number, text: string) => {
        // console.log(c)
        this.setText(id, text)
    }

    public render() {
        console.log(this.state.components)
        return (
            <div>
                <button onClick={this.addSection}>Add Section</button>
                {this.state.components.map((component) => (
                    <BlogTextInput
                        key={component.id}
                        onChange={(value: string) => this.onChange(component.id, value)}
                    />
                ))}
                <button onClick={this.createBlog}>Create Blog</button>
            </div>
        );
    }
}
