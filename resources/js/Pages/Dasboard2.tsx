import BlogTextInput from '@/Components/Blog/BlogTextInput';
import { Inertia } from '@inertiajs/inertia';
import * as React from 'react';

export interface DashboardProps {
    onChange: (text: string) => void;
}

export interface DashboardState {
    components: number[]; // Array of identifiers for BlogTextInput instances
}

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
    private idCounter: number;

    constructor(props: DashboardProps) {
        super(props);
        
        // Initialize a counter to generate unique IDs for each BlogTextInput
        this.idCounter = 1;

        this.state = {
            components: [this.idCounter] // Initialize with one component
        };
    }

    // Method to add a new BlogTextInput component
    addSection = () => {
        console.log("Adding a new section");

        // Increment the counter and add a new ID to the components array
        this.setState((prevState) => ({
            components: [...prevState.components, ++this.idCounter]
        }));
    };

    createBlog = () => {
        Inertia.post(route('blogs.create'), { title: 'test', owner: 'testUser', content: JSON.stringify(['test']) });
    }

    onChange= () => {
        this.props.onChange
    }

    public render() {
        return (
            <div>
                <button onClick={this.addSection}>Add Section</button>
                {this.state.components.map((id) => (
                    <BlogTextInput
                        key={id}
                        onChange={this.onChange}
                    />
                ))}
                <button onClick={this.createBlog}>Create Blog</button>
            </div>
        );
    }
}
