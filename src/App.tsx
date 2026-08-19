import './App.css'
import Card from './components/Card'
import Profile from './components/Profile'

function App() {

  return (
    <div className="container">
      <Profile />
      <Card link="https://example.com" title="Linkedin" />
      <Card link="https://example.com" title="Github" />
      <Card link="https://example.com" title="Portfolio" />
    </div>
  )
}

export default App
