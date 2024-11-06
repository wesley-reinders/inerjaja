import { Button } from '@mantine/core';
import { IconSection } from '@tabler/icons-react';

export default function Login() {
    return (
        <div>
            <p>test</p>
            <Button rightSection={<IconSection size={14} />}>
                Add new section
            </Button>
        </div>
    )
}

