import Vue from 'vue';

export const state = Vue.observable({
    subscriptionData: [
        {
            name: 'Basic',
            price: '$9.00',
            repetition: 'Per Month',
            description: 'All the basics for businesses that are just getting started.',
            list: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security'],
            bestPrice: false,
        },
        {
            name: 'Business',
            price: '$39.00',
            repetition: 'Per Month',
            description: 'Better for growing businesses that want more customers.',
            list: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security'],
            bestPrice: true,
        },
        {
            name: 'Enterprise',
            price: '$79.00',
            repetition: 'Per Month',
            description: 'Advanced features for pros who need more customization.',
            list: ['Full Access', 'Enhanced Security', 'Source Files', '1 Domain Free', 'Enhanced Security'],
            bestPrice: false,
        },
    ]
})