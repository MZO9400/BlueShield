import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions";

const mapStateToProps = state => {
  return {
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    resetError: () => dispatch(actions.resetErrorCode())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  let modal = null;
  if (props.error)
    modal = (
      <Modal isOpen={true}>
        <ModalHeader>{props.error.title}</ModalHeader>
        <ModalBody>{props.error.text}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.resetError()}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    );
  return modal;
});
