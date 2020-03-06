import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";

ReactModal.setAppElement("#root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      info: props.info
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="event-modal">
        <button onClick={this.handleOpenModal}>Details</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={{ overlay: { zIndex: 10 } }}
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <p>{this.state.info}</p>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
