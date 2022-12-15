import {sayHello} from "../lib/api_client";
import Header from "@components/Header";
import { useState, useEffect } from 'react'

export default function Footer() {
  const [message, setMessage] = useState('Loading...');

  useEffect(async () => {
    setMessage(await sayHello())
  }, [])
  
  return (
    <main>
      <Header title="This is the message returned from the serverless function:"/>
      <p data-id='message'>
        {message}
      </p>
    </main>
  )
}
