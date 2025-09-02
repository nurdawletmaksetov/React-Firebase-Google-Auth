// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import React from 'react'
// import { auth } from '../firebase'

// const App = () => {

//   const handleGoogleLogin = async () => {
//     const provider = new GoogleAuthProvider()
//     const result = await signInWithPopup(auth, provider)
//     const user = result.user

//   }
//   return (
//     <div>
//       <button onClick={handleGoogleLogin}>Login with Google</button>
//       <p>{user}</p>
//       <p>"Logged in seccesfully"</p>
//     </div>
//   )
// }

// export default App

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase'

const App = () => {
  const [user, setUser] = useState(null)

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      setUser(result.user)
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {user ? (

        <>
          <p>Welcome, {user.displayName}</p>
          <p>Logged in successfully</p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  )
}

export default App
