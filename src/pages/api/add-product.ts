// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// type Data = {
//   name: string
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   //create product + price in stripe
   //store product info in supabase
   const product = await stripe.products.create({
      name: req.body.title,
      description: req.body.description
   });
}
