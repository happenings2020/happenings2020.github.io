import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';
import Modal from '../Modal/Modal'



const Content = ({ movie, onClose }) => (

  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'backgroundImage': `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.info}</div>
        <div className="content__description">
          {/* {movie.info || "lorem ipsum"} <br /> <br /> */}

          <Modal info={movie.info} />

        </div>

      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
