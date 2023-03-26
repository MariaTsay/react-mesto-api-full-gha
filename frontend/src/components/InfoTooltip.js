import React, { useEffect } from "react";
import iconSuccess from "../images/icon__success.svg";
import iconFail from "../images/icon__fail.svg";

const InfoTooltip = (props) => {
  const { name, status, text, isOpen, onClose } = props;

  const icon = status === 'success' ? iconSuccess : iconFail;

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
    <section className={`popup popup_type_status ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <div className="popup__content">
          <button className="popup__close" type="button" id={`${name}-close`} onClick={onClose} />
          <form
            className="popup__form"
            name={name}
            id={name}
          >
            <img className="popup__infotool-image" src={icon} alt={status} />
            <p className="popup__infotool-text">{text}</p>

          </form>
        </div>
      </div>
    </section>
  )
}

export default InfoTooltip;