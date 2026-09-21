'use client';

import React, { useEffect, useState, createContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';
import vector from '../assets/Vector.svg';

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

    setSlide((currentSlide) => (currentSlide + direction + items.length) % items.length);
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
  }, [autoPlay, autoPlayTime, items.length]);

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
          <div className="slide-frame">
            
            <Image
              className="slide-image"
              src={items[slide].image}
              alt={items[slide].title}
              width={1200}
              height={800}
              priority
            />
            <Image
              className="slide-vector"
              src={vector}
              alt=""
              fill
              aria-hidden="true"
            />

            <div className="slide-overlay">
              <div className="slide-content">
                <p className="slide-motto">
                  {items[slide].motto}
                </p>
                <h3 className="slide-title">{items[slide].title}</h3>
                <p className="slide-description">{items[slide].description}</p>

                <div className="slide-actions">
                  <button type="button" className="slide-btn slide-btn-primary">
                    {items[slide].button1}
                  </button>
                  <button type="button" className="slide-btn slide-btn-secondary">
                    {items[slide].button2}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="slide-nav slide-nav-prev"
              aria-label="Previous slide"
              onClick={() => changeSlide(-1)}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="slide-nav slide-nav-next"
              aria-label="Next slide"
              onClick={() => changeSlide(1)}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        ) : null}

        <div style={{ position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
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