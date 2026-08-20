import './App.css'
import Card from './components/Card'
import Profile from './components/Profile'
import { SocialLink } from './components/SocialLink'
import SwitchButton from './components/SwitchButton'
import {siteData } from './data/data'

function App() {

  return (

    <div className="container">
      <Profile />
      <SwitchButton />
      <ul>
        {siteData.links.map((card) => (
          <Card key={card.id} link={card.url} title={card.title} />
        ))}
      </ul>
        <SocialLink />
    </div>
  )
}

export default App
