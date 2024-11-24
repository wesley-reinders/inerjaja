import { Button, Modal } from '@mantine/core';
import * as React from 'react';

export interface IConfirmModalProps {
    cancel: void;
    confirm: void;
}

export function ConfirmModal (props: IConfirmModalProps) {
  return (
    <p>modal</p>
//     <Modal
//     opened={confirmModal}
//     onClose={() => setConfirmModal(false)}
//     title={edit ? 'Edit blog' : 'Create blog'}
// >
//     <Button onClick={() => setConfirmModal(false)} color="red">
//         No
//     </Button>
//     <Button onClick={edit ? editBlog : createBlog} color="blue">
//         Yes
//     </Button>
// </Modal>
  );
}
