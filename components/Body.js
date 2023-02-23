import {generateMessageOnServer} from "../lib/api_client";
import Header from "@components/Header";
import {useState} from 'react'

export default function Footer() {
  const [message, setMessage] = useState('Loading...');
  const [name, setName] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const messageFromServer = await generateMessageOnServer(name)
    setMessage(messageFromServer)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' value={name} onChange={(event) => setName(event.target.value)}/>
        <button type='submit'>Send my name to the server!</button>
      </form>
      <Header title="This is the message returned from the serverless function:"/>
      <p data-id='message'>
        {message}
      </p>
    </main>
  )
}
