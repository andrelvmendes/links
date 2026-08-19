import './App.css'
import Card from './components/Card'
import Profile from './components/Profile'
import { SocialLink } from './components/SocialLink'

function App() {

  return (
    <div className="container">
      <Profile />
      <ul>
        <Card link="https://example.com" title="Linkedin" />
        <Card link="https://example.com" title="Github" />
        <Card link="https://example.com" title="Portfolio" />
      </ul>
        <SocialLink />
    </div>
  )
}

export default App
