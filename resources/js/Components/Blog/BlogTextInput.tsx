import React, { useState } from "react";
import { ActionIcon, Textarea } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type BlogTextInputProps = {
    onChange: (text: string) => void;
    onDelete: () => void;
    delete: boolean;
    initialValue: string;
};

const BlogTextInput: React.FC<BlogTextInputProps> = ({
    onChange,
    onDelete,
    delete: showDeleteButton,
    initialValue,
}) => {
    const [text, setText] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.currentTarget.value;
        setText(newText);
        onChange(newText);
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
            <Textarea
                value={text}
                onChange={handleChange}
                radius="md"
                h={200}
                styles={{
                    wrapper: { height: "100%" },
                    input: { height: "100%", paddingBottom: "100px" }, // Adjust padding for button space
                }}
                placeholder="Section text"
            />
            {showDeleteButton && (
                <ActionIcon
                    variant="transparent"
                    color="red"
                    pos={"absolute"}
                    right={"10px"}
                    bottom={"10px"}
                    onClick={onDelete}
                >
                    <IconTrash />
                </ActionIcon>
            )}
        </div>
    );
};

export default BlogTextInput;
