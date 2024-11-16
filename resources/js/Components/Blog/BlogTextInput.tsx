import { ActionIcon, Button, Container, Stack, Textarea } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import React, { Component } from "react";

type BlogTextInputProps = {
  onChange: (text: string) => void;
  onDelete: () => void;
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
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
      <Textarea
        value={this.state.text}
        onChange={this.handleChange}
        radius="md"
        h={200}
        styles={{
          wrapper: { height: '100%' },
          input: { height: '100%', paddingBottom: '100px' }, // Adjust padding for button space
        }}
        placeholder="Section text"
      />
      <ActionIcon variant="transparent"
        color="red"
        pos={"absolute"}
        right={"10px"}
        bottom={"10px"}
        onClick={this.props.onDelete}
      >
        <IconTrash/>
      </ActionIcon>
      </div>


    );
  }
}

export default BlogTextInput;
