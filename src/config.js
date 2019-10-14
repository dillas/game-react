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
  centerMode: true,
  infinite: true,
  centerPadding: "630px",
  slidesToShow: 1,
  responsive: [
    {breakpoint: 2180, settings: {centerPadding: '450px', }},
    {breakpoint: 1920, settings: {centerPadding: '320px', }},
    {breakpoint: 1650, settings: {centerPadding: '170px', }},
    {breakpoint: 1440, settings: {centerPadding: '80px', }},
    {breakpoint: 1280, settings: {centerPadding: '80px', }},
    {breakpoint: 1024, settings: {centerPadding: '0', }},
  ],
  speed: 500,
  nextArrow: <SliderArrow type='next' classNames='gallery-slider-item__arrow gallery-slider-item__arrow--next' />,
  prevArrow: <SliderArrow type='prev' classNames='gallery-slider-item__arrow gallery-slider-item__arrow--prev' />
};

export const partnerSliderSettings = {
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};


export const slides = [
  { id: '1', link: 'slider-image/1.jpg', alt: '', desc: '' },
  { id: '2', link: 'slider-image/2.jpg', alt: '', desc: '' },
  { id: '3', link: 'slider-image/3.jpg', alt: '', desc: '' },
  { id: '4', link: 'slider-image/4.jpg', alt: '', desc: '' },
  { id: '5', link: 'slider-image/5.jpg', alt: '', desc: '' },
  { id: '6', link: 'slider-image/6.jpg', alt: '', desc: '' },
  { id: '7', link: 'slider-image/7.jpg', alt: '', desc: '' },
  { id: '8', link: 'slider-image/8.jpg', alt: '', desc: '' },
  { id: '9', link: 'slider-image/9.jpg', alt: '', desc: '' },
  { id: '10', link: 'slider-image/10.jpg', alt: '', desc: '' },
  { id: '11', link: 'slider-image/11.jpg', alt: '', desc: '' },
]

export const partners = [
  { id: '1', link: 'partners-logo/01.png', alt: '', desc: '' },
  { id: '2', link: 'partners-logo/02.png', alt: '', desc: '' },
  { id: '3', link: 'partners-logo/03.png', alt: '', desc: '' },
  { id: '4', link: 'partners-logo/04.png', alt: '', desc: '' },
  { id: '5', link: 'partners-logo/05.png', alt: '', desc: '' },
  { id: '6', link: 'partners-logo/06.png', alt: '', desc: '' },
]