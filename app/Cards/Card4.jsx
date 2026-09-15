'use client';

import React, {useState} from 'react';
import {Collapse} from 'react-collapse';

function Card4(){
    const [openItems, setOpenItems] =useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const faqItems = [
        {
            id: 1, 
            question: 'Is Cashia safe to use?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            id: 2, 
            question: 'How does Stika work?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            id: 3, 
            question: 'What are the fees?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            id: 4, 
            question: 'How quickly do I get my money?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
    ];
    return(
        <div>
        {faqItems.map(item=> (
            <div key={item.id}>
                <button
                onClick={() => toggleItem(item.id)}
                style={{
                    width: '100%',
                    padding: '15px 20px',
                    backgroundColor: openItems[item.id] ? '#ffffff' : '#ffffff',
                    color: openItems[item.id] ? '#333' : '#333',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '10px',
                    fontWeight: '500',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color 0.3s'
              }}
                >
                    <span>{item.question}</span>
                    <span>
                        {openItems[item.id] ? '-': '+'}
                    </span>
                </button>
                <Collapse isOpened={openItems[item.id]}>
                    <p>{item.answer}</p>
                </Collapse>
            </div>
        ))}
        </div>
        
    );
}

export default Card4;