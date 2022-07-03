import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteContactModal = (props) => {
  const { onConfirmation, isDeleteModalOpen, toggleDeleteModal } = { ...props };
  return (
    <Modal
      centered
      fullscreen='sm'
      size='sm'
      isOpen={isDeleteModalOpen}
      toggle={toggleDeleteModal}
    >
      <ModalHeader toggle={toggleDeleteModal}>Delete Contact</ModalHeader>
      <ModalBody>Are you sure you want to delete the contact?</ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={onConfirmation} aria-label='Delete'>
          Delete
        </Button>{" "}
        <Button onClick={toggleDeleteModal} aria-label='Cancel'>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteContactModal;
