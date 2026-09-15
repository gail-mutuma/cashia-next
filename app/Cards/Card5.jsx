import React, {useState} from 'react';
import ReactDOM from 'react-dom'

const clickData = [
    {
        question1: 'Is Cashia safe to use',
        answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here.",
    },
    {
        question2: 'How does Stika work?',
        answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here.",
    },
    {
        question3: 'What are the fees?',
        answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here.",
    },
    {
        question4: 'How quickly do I get my money?',
        answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here.",
    },
    
]

Array.from(choices).forEach(element =>{
    element.onclick=function(){
        const FAQs=clickData[element.id];
        question.textContent=FAQs.title;
        answer.textContent=FAQs.answer;
    }
})
