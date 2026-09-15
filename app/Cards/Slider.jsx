'use client';

import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';

export const SliderContext = createContext();

const slidesData = [
  {
    image: slider1,
    motto: 'Welcome to Cashia',
    title: 'Our goal is to make money feel lighter',
    description: 'Money shouldn’t feel heavy, awkward, or risky. Cashia is a Kenyan-built digital payments platform designed to remove friction from everyday money moves.',
        button1: 'Create a free account',
        button2: 'Explore Cashia',
    },
    {
        image: slider2,
        motto: 'Built for everyday life.',
        title: 'OYour money, without the stress',
        description: 'Send, receive, and manage money without sharing numbers everywhere or worrying about who’s watching. The Cashia wallet keeps your details private, your records clear, and your money moving in seconds—so you can focus on life, not transactions.',
        button1: 'Get the Cashia App',
        button2: 'See how the wallet works',
    },
    {
        image: slider4,
        motto: 'Modern payments for modern Kenyan businesses.',
        title: 'Get paid clearly. Run your business calmly.',
        description: 'From WhatsApp sellers to physical shops and growing brands, Cashia helps businesses accept payments without chaos. Turn scattered DMs, tills, and screenshots into clean, trackable payments—with dashboards that save time and tools that grow with you.',
        button1: 'Start accepting payments',
        button2: 'Cashia for your business',
    },
    {
        image: slider5,
        motto: 'Introducing Stika',
        title: 'Claim Your Stika!',
        description: 'A Stika is your unique name on Cashia — one @handle to identify yourself, send and receive money. No phone number to share. Bila kujiexpose. Check if yours is free and grab it!!',
        button1: 'Explore developer docs',
  },
  
];

const Slider = ({ width, height, autoPlay, autoPlayTime }) => {
  const [items] = useState(slidesData);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    if (!items.length) return;

    const nextIndex = (slide + direction + items.length) % items.length;
    setSlide(nextIndex);
  };

  const goToSlide = (number) => {
    if (!items.length) return;
    setSlide(((number % items.length) + items.length) % items.length);
  };

  const handleTouchStart = (event) => {
    setTouchPosition(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (touchPosition === null) return;

    const currentPosition = event.touches[0].clientX;
    const distance = touchPosition - currentPosition;

    if (distance > 50) {
      changeSlide(1);
    }

    if (distance < -50) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay || items.length < 2) return undefined;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayTime, items.length, slide]);

  return (
    <div
      className="slider"
      style={{ width, height }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        {items.length ? (
          <div style={{ position: 'absolute', width: '90%', minHeight: 420, overflow: 'hidden', borderRadius: 18 }}>
            <img
              src={items[slide].image}
              alt={items[slide].title}
              style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                width: 200,
                height: 20,  
                fontSize: '5px',              
                display: 'flex',
                justifyContent: 'flex-start',
                padding: '30px 20px',
                zIndex: 2,
              }}
            >
              <div style={{ maxWidth: 430, color: '#000000' }}>
                <p style={{ margin: '0 0 10px', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.9 }}>
                  {items[slide].motto}
                </p>
                <h3 style={{ margin: '0 0 12px', fontSize: 20, lineHeight: 1.2 }}>{items[slide].title}</h3>
                <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.5 }}>{items[slide].description}</p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    style={{
                      background: '#DC1F5C',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      padding: '5px 5px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      pointerEvents: 'auto',
                    }}
                  >
                    {items[slide].button1}
                  </button>
                  <button
                    type="button"
                    style={{
                      background: '#fff',
                      color: '#DC1F5C',
                      border: 'none',
                      borderRadius: 6,
                      width: 40,
                      height: 20,
                      padding: '5px 5px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      pointerEvents: 'auto',
                    }}
                  >
                    {items[slide].button2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              style={{
                width: index === slide ? 20: 10,
                height: 10,
                borderRadius: '50%',
                border: 'none',
                background: index === slide ? '#F2A6BE' : '#cbd5e1',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  autoPlay: true,
  autoPlayTime: 5000,
  width: '100%',
  height: '100%',
};

export default Slider;