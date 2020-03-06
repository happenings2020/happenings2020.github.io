import React from "react";
import ReactModal from "react-modal";
import "./Modal.scss";
import cross from "../assets/cross.svg";
import ModalDesc from "./ModalDesc";

ReactModal.setAppElement("#root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: props.movie.title,
      infoT: props.movie.infoT,
      info: props.movie.info
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
          style={{
            overlay: { zIndex: 10 },
            content: {
              backgroundColor: "#212121",
              color: "#fff"
            }
          }}
        >
          <div className="modal-content">
            <button onClick={this.handleCloseModal}>
              <img src={cross} alt="" width="40px"/>
            </button>
            <h3>{this.state.title} ({this.state.infoT}) </h3>
            <div>
              {this.state.info.map(inf => (
              <ModalDesc info={inf} key={Math.random()}></ModalDesc>
              ))}
             </div>
            
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
