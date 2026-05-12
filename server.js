require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/', (req, res) => {
    res.send('GulfTP Payment Server is running.');
});

// Endpoint to create a Stripe Checkout Session
app.post('/create-checkout-session', async (req, res) => {
    const { name, email, industry, description } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Benchmarking Search Report',
                            description: `Industry: ${industry} | Transaction: ${description}`,
                        },
                        unit_amount: 75000, // $750.00 in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/index.html`,
            metadata: {
                client_name: name,
                industry: industry,
                transaction_description: description
            }
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Endpoint: http://localhost:${PORT}/create-checkout-session`);
});
