export type Faq = {
    question: string;
    answer: string;
};

export type FaqCategory = {
    id: string;
    label: string;
    faqItems: Faq[];
};

    export const FAQCategories: FaqCategory[] = [
    {
        id: "getting-started",
        label: "Getting Started",
        faqItems: [
        {
            question: 'Is Cashia safe to use?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            question: 'How does Stika work?',
            answer: "Stika is your personal payment code isntead of sharing your phone number, you share your stika. People pay you, money arrives in your wallet, your number stays private. Learn how to create your stika."
        },
        {
            question: 'What are the fees?',
            answer: "Creating an account is free. A small percentage is charged per successful transaction — see the Tariff page for the full breakdown."
        },
        {
            question: 'How quickly do I get my money?',
            answer: "Payments reflect in your wallet instantly. Withdrawals to M-Pesa are near-instant; bank settlements take up to one business day."
        },
        ],
    },
    {
        id: "membership",
        label: "Membership and pricing",
        faqItems: [
        {
            question: 'Is Cashia safe ?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            question: 'How does Stika work?',
            answer: "Stika is your personal payment code isntead of sharing your phone number, you share your stika. People pay you, money arrives in your wallet, your number stays private. Learn how to create your stika."
        },
        {
            question: 'What are the fees?',
            answer: "Creating an account is free. A small percentage is charged per successful transaction — see the Tariff page for the full breakdown."
        },
        {
            question: 'How quickly do I get my money?',
            answer: "Payments reflect in your wallet instantly. Withdrawals to M-Pesa are near-instant; bank settlements take up to one business day."
        },
        ],
    },
    {
        id: "payment",
        label: "Payment requests and cashing out",
        faqItems: [
        {
            question: 'Is Cashia safe ?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            question: 'How does Stika work?',
            answer: "Stika is your personal payment code isntead of sharing your phone number, you share your stika. People pay you, money arrives in your wallet, your number stays private. Learn how to create your stika."
        },
        {
            question: 'What are the fees?',
            answer: "Creating an account is free. A small percentage is charged per successful transaction — see the Tariff page for the full breakdown."
        },
        {
            question: 'How quickly do I get my money?',
            answer: "Payments reflect in your wallet instantly. Withdrawals to M-Pesa are near-instant; bank settlements take up to one business day."
        },
        ],
    },
    {
        id: "user-accounts",
        label: "User accounts & technical issues",
        faqItems: [
        {
            question: 'Is Cashia safe ?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            question: 'How does Stika work?',
            answer: "Stika is your personal payment code isntead of sharing your phone number, you share your stika. People pay you, money arrives in your wallet, your number stays private. Learn how to create your stika."
        },
        {
            question: 'What are the fees?',
            answer: "Creating an account is free. A small percentage is charged per successful transaction — see the Tariff page for the full breakdown."
        },
        {
            question: 'How quickly do I get my money?',
            answer: "Payments reflect in your wallet instantly. Withdrawals to M-Pesa are near-instant; bank settlements take up to one business day."
        },
        ],
    },
    {
        id: "refunds",
        label: "Refunds & disputes",
        faqItems: [
        {
            question: 'Is Cashia safe ?',
            answer: "Yes. We're licensed by the Central Bank of Kenya and use bank-grade security. Your data is encrypted, your privacy is protected, and we're PCI DSS compliant. We also have a strong board and governance team that exist to ensure we remain true to our customer promise. You can read more about our Board here."
        },
        {
            question: 'How does Stika work?',
            answer: "Stika is your personal payment code isntead of sharing your phone number, you share your stika. People pay you, money arrives in your wallet, your number stays private. Learn how to create your stika."
        },
        {
            question: 'What are the fees?',
            answer: "Creating an account is free. A small percentage is charged per successful transaction — see the Tariff page for the full breakdown."
        },
        {
            question: 'How quickly do I get my money?',
            answer: "Payments reflect in your wallet instantly. Withdrawals to M-Pesa are near-instant; bank settlements take up to one business day."
        },
        ],
    },
    ];