import './App.css'
import Countries from './components/Countries/Countries'
import { Suspense } from 'react'


const  countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json
  ())
function App() {

  return (
    <>
        <Suspense fallback={<p>Nadir Vai loading</p>}>
            <Countries countriesPromise={countriesPromise} />
        </Suspense>
    </>
  )
}

export default App
