import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = (props) => {
    const { isOpen, onClose, onUpdateUser } = props;
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser?.name ?? '');
        setDescription(currentUser?.about ?? '');
    }, [currentUser, isOpen]);

    //обработчик сабмита
    const handleSubmit = (e) => {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name: name,
          about: description,
        });
    }

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            submitBtnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__text popup__text_type_name"
                id="profilename-input"
                type="text"
                name="name"
                required=""
                minLength={2}
                maxLength={40}
                placeholder="Имя профиля"
                value={name}
                onChange={handleChangeName}
            />
            <span className="popup__error profilename-input-error" />
            <input
                className="popup__text popup__text_type_about"
                id="profilejob-input"
                type="text"
                name="about"
                required=""
                minLength={2}
                maxLength={200}
                placeholder="Описание профиля"
                value={description}
                onChange={handleChangeDescription}
            />
            <span className="popup__error profilejob-input-error" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;