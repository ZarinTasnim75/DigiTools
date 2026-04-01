import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/banner'
import Status from './components/status/Status'
import { Suspense } from 'react'
import ProductOptions from './components/ProductOptions/ProductOptions'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Stamp from './components/Stamp/Stamp'
import Footer from './components/Foot/Footer'

const productPromise =fetch('ProductData.json').then(res => res.json())

function App() {


  return (
    <>
     <header>
        <Navbar></Navbar>
     </header>
     <section>
      <Banner></Banner>
      <Status></Status>
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <ProductOptions productPromise={productPromise}></ProductOptions>
      </Suspense>

      <Features></Features>
      <Pricing></Pricing>
     </section>
     <footer>
      <Stamp></Stamp>
      <Footer></Footer>
     </footer>
    </>
  )
}

export default App