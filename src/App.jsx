// import React from 'react' //rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App 

// import React from 'react' //rafc

// export const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// import React from 'react' //rafce

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React from 'react' //rfc

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }
import React, { createContext, useState } from 'react'
import First from './First'
import Second from './Second'
import MyRoutes from './MyRoutes'
import { MyContextProvider } from './hooks/MyContext'
import './App.css'
import { Provider } from 'react-redux'
import myStore, { persistor } from './redux/myStore'
import { PersistGate } from 'redux-persist/es/integration/react'

export const MyThemeContext = createContext()

const App = () => {

  let [theme, setTheme] = useState('light')


  return (
    <>
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>

      <MyThemeContext.Provider value= {{theme, setTheme}}>
        <MyContextProvider>
          <MyRoutes />
        </MyContextProvider> 
      </MyThemeContext.Provider>

      </PersistGate>
      </Provider>
    </>
  )
}

export default App

