import { useEffect, useState } from 'react'
import './Translations.css'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement } from '@stripe/react-stripe-js'
import { useStripe } from '@stripe/react-stripe-js'
import { useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export function Translations() {

    const [ isPaying, setIsPaying ] = useState<boolean>(false)
    const [ searchParams ] = useSearchParams()

    useEffect(() => {
        if(searchParams.get('payment_intent')) {
            // post to our server, and modify the user record to a paying user
            setIsPaying(true)
        }
    }, [ searchParams ])

    const stripePromise = loadStripe('pk_test_LXnCBBmyRH1ABMAhqR0ZRNRe')

    return (
        <div className='Translations'>
            {isPaying && <>
                translation form...
            </>}

            {!isPaying && <>
                <Elements stripe={stripePromise} options={{
                    mode: 'payment',
                    amount: 100,
                    currency: 'usd'
                }}>
                    <CheckoutForm />
                </Elements>
            </>}
        </div>
    )
}

function CheckoutForm () {

    const stripe = useStripe()
    const elements = useElements()

    const [ errorMessage, setErrorMessage ] = useState<string>('')

    async function handleSubmit(event: {preventDefault: Function}) {
        event.preventDefault()

        // this creates a payment intent
        const {error: submitError} = await elements!.submit()

        // if creating payment intent failed, show it in the GUI
        if(submitError?.message) {
            setErrorMessage(submitError.message)
        }

        const response = await axios.post('http://localhost:3000/stripe/payment-intent')
        const { paymentIntent } = response.data


        console.log(paymentIntent)

        const stripeResponse = await stripe!.confirmPayment({
            elements: elements!,
            clientSecret: paymentIntent.client_secret,
            confirmParams: {
                return_url: 'http://localhost:5173/translations'
            }
        })

        console.log(stripeResponse)

        if(stripeResponse.error) {
            setErrorMessage(stripeResponse.error.message!)
        }





    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit">
                Pay
            </button>
            {errorMessage}
        </form>
    )
}