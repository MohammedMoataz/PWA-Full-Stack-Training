import { Parent } from './components/parent'
import './App.css'
import { AppProvider } from './contextapi/contexts/AppContext'

function App() {
  return (
    <div className="App">
      <AppProvider value={''}>
        <Parent />
      </AppProvider>
    </div>
  )
}

export default App
