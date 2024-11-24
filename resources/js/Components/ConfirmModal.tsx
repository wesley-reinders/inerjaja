import { Button, ButtonGroup, Modal, Stack } from "@mantine/core";

export interface IConfirmModalProps {
    title: string;
    description?: string;
    opened: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function ConfirmModal(props: IConfirmModalProps) {
    return (
        <Modal
            opened={props.opened}
            onClose={props.onClose}
            title={props.title}
        >
            <Stack>
                <small>{props.description}</small>

                <ButtonGroup>
                    <Button onClick={props.onClose} color="red">
                        No
                    </Button>
                    <Button onClick={props.onConfirm} color="blue">
                        Yes
                    </Button>
                </ButtonGroup>
            </Stack>
        </Modal>
    );
}
