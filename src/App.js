import React from 'react'
import { Provider } from 'react-redux'
import value from './app/store'
import Counter from './feature/Counter'

function App() {
    return (
        <Provider store={value}>
            <Counter />
        </Provider>
    )
}

export default App