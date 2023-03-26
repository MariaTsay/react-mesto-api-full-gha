import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
    const { isOpen, onClose, onUpdateAvatar } = props;
    const avatarRef = useRef();

    //обработчик сабмита
    const handleSubmit = (e) => {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    }

    useEffect(() => {
        if(isOpen) {
            avatarRef.current.value = ''
          }
    }, [isOpen])

    return (
        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            submitBtnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__text popup__text_type_avatar-link"
                id="avatarlink-input"
                type="url"
                name="avatarlink"
                placeholder="Ссылка на аватар"
                required=""
                ref={avatarRef}
            />
            <span className="popup__error avatarlink-input-error" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
