import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {
    const {card, onCardClick, onCardDelete, onCardLike} = props;
    //подписка на констекст
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner === currentUser._id;
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((id) => id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (`places__like ${isLiked && 'places__like_active'}`);

    const handleClick = () => {
        onCardClick(props.card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    const handleLikeClick = () => {
        onCardLike(card);
    }

    return (
        <li className="places__item">
            {isOwn && (
             <button className="places__delete" type="button" onClick={handleDeleteClick}></button>
            )}
            
            <img className="places__image" id="place-link"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <div className="places__text-content">
                <h2 className="places__title" id="place-name">{card.name}</h2>
                <div className="places__like-container">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <span className="places__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;