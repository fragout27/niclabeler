const express = require('express');
const stripe = require('stripe')('sk_test_51PdaBDRuSV80Y6WiMUaIfhhUmZYRGql0WxXg2D70riTGhOsZytctWGkNloxYlZ6HMNtRwkpBzSnjp72cGCcBHRei008vWeFbU5');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
  const { userId, plan } = req.body;

  const prices = {
    basic: 'price_1234', // Replace with your actual Stripe price IDs
    unlimited: 'price_5678',
  };

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices[plan],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      client_reference_id: userId,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));