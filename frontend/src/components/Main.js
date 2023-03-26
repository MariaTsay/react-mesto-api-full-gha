import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardDelete, onCardLike, cards } = props;
  //подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-pic"
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
          <button className="profile__avatar-edit-btn" type="button" onClick={onEditAvatar} />
        </div>
        <div className="profile__profile-info">
          <div className="profile__profile-info-container">
            <h1 className="profile__profile-info-title" id="profile-name">
              {currentUser.name}
            </h1>
            <button
              className="profile__profile-info-edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__profile-info-subtitle" id="profile-job">
            {currentUser.about}
          </p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} />
      </section>
      <section className="places">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
              />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;