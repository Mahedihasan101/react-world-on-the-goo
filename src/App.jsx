
import { Suspense } from 'react'
import './App.css'
import Countries from './Componand/Countries/Countries'

function App() {
 
  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res =>res.json())
  return (
    <>
    <Suspense fallback={<p>Nadin is loding...</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
