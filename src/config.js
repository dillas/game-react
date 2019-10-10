import React from 'react'
import SliderArrow from './SliderArrow'


export const CONFIG = {
  socialLinks: [
    { id: 1, name: 'vk', link: "https://vk.com/bunker42com" },
    { id: 2, name: 'fb', link: "http://facebook.com/bunker42com" },
    { id: 3, name: 'yt', link: "https://www.youtube.com/channel/UCYLVnXR9Yhk5BaDOiEsk0Fg/videos" },
    { id: 4, name: 'tw', link: "https://twitter.com/bunker42com" },
    { id: 5, name: 'ok', link: "https://ok.ru/bunker42" },
    { id: 6, name: 'in', link: "https://instagram.com/bunker42com" },
  ],
  contacts: {
    phone: '+7 499 7030077',
    address: '115172, г. Москва, 5-й Котельнический переулок, д.11',
    email: 'game@bunker42.com',
  },
  ourSites: [
    { id: 'museum', name: 'Музей', link: "http://bunker42.com" },
    { id: 'restaurant', name: 'Ресторан', link: "http://banket-bunker42.ru" },
    { id: 'planet', name: 'Детский', link: "http://bunkerplanet.ru" },
  ],
  navigation: [
    { id: 1, exact: true, link: '/', name: 'Главная' },
    { id: 2, exact: false, link: '/games', name: 'Игры' },
    { id: 3, exact: false, link: '/posts', name: 'Новости' },
    // { link: id: 4, exact: false, '/about', name: 'О нас' },
    { id: 5, exact: false, link: '/gallery', name: 'Галерея' },
    { id: 6, exact: false, link: '/contacts', name: 'Контакты' },
    { id: 7, exact: false, link: '/rules', name: 'Правила' },
  ]
}

export const gameSliderSettings = {
  dots: false,
  infinite: true,
  // fade: true,
  // autoplay: true,
  speed: 200,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SliderArrow type='next' classNames='game-slider-item__arrow game-slider-item__arrow--next' />,
  prevArrow: <SliderArrow type='prev' classNames='game-slider-item__arrow game-slider-item__arrow--prev' />
}

export const gallerySliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "192px",
  slidesToShow: 1,
  speed: 500,
  nextArrow: <SliderArrow type='next' classNames='game-slider-item__arrow game-slider-item__arrow--next' />,
  prevArrow: <SliderArrow type='prev' classNames='game-slider-item__arrow game-slider-item__arrow--prev' />
};

export const partnerSliderSettings = {
  className: "flex-center",
  infinite: true,
  centerMode: true,
  // slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  variableWidth: true
};