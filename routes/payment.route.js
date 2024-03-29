const express = require('express');
const router = express.Router();

const Stripe = require('stripe')('sk_test_51ODmqfBEhjMIvhmrUnEjGXgUe2XqHnWk32EPbaliilRkJgNhtYB8nEL1ZTVInDOa2icKPM5dpk2jmiul0hhdjuqO00hUQ4bR2Y');

router.post('/', async (req, res) => { console.log(req.body)
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });

module.exports = router;
