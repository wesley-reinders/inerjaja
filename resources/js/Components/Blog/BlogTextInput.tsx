import { Textarea } from "@mantine/core";
import React, { Component } from "react";

type BlogTextInputProps = {
  onChange: (text: string) => void; 
};

type BlogTextInputState = {
  text: string;
};

class BlogTextInput extends Component<BlogTextInputProps, BlogTextInputState> {
  constructor(props: BlogTextInputProps) {
    super(props);
    this.state = { text: "" };  
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.currentTarget.value;
    this.setState({ text: newText });

    this.props.onChange(newText);
  };

  render() {
    return (
      <Textarea
        value={this.state.text}
        onChange={this.handleChange}
        radius="md"
        placeholder="Section text"
      />
    );
  }
}

export default BlogTextInput;
