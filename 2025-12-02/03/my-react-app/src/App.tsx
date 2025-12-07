import './zoo.css'
import ZooHeader from './components/ZooHeader'
import ZooGallery from './components/ZooGallery'

function App() {
  const animals = [
    {
      id: '1',
      name: 'Leo',
      species: 'Lion',
      img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80',
      description: 'A friendly lion who loves naps in the sun.'
    },
    {
      id: '2',
      name: 'Maya',
      species: 'Giraffe',
      img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80',
      description: 'Tall and curious — Maya spots leaves from afar.'
    },
    {
      id: '3',
      name: 'Bubbles',
      species: 'Penguin',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
      description: 'Bubbles waddles quickly and swims even faster.'
    }
  ]

  return (
    <div className="zoo-root">
      <ZooHeader title="Welcome to the Mini Zoo" subtitle="A tiny single-page zoo showcase" />
      <main>
        <ZooGallery animals={animals} />
      </main>
      <footer className="zoo-footer">Made with ❤️ — Mini Zoo SPA</footer>
    </div>
  )
}

export default App
