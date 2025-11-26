import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to the app</h2>
      <SignedOut>
         <SignInButton mode='modal'/>
      </SignedOut>
      <SignedIn>
         <SignOutButton/>
      </SignedIn>
      <UserButton></UserButton>
       
      
     
    </>
  )
}

export default App
