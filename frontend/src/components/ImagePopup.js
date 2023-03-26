import React, { useEffect } from "react";

const ImagePopup = (props) => {
  const { card, onClose, isOpen } = props;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscBtn = (e) => {
      if (e.keyCode === 27)
        onClose()
    }
    document.addEventListener('keydown', handleEscBtn)
    return () => document.removeEventListener('keydown', handleEscBtn)
  }, [isOpen, onClose])

  return (
    <section className={`popup popup_type_photo ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__content">
          <button className="popup__close" type="button" onClick={onClose} />
          <figure className="popup__fullscreen-form">
            <img
              className="popup__fullscreen-image"
              src={card.link}
              alt={card.name}
            />
            <figcaption className="popup__description">
              {card.name}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default ImagePopup;