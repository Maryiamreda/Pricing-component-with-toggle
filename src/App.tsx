import { useContext, useState } from 'react'

import './App.css'
import { PricingContext } from './toggle'

function App() {
  const { type, togglePricing } = useContext(PricingContext)
  console.log("Pricing Type:", type); // Check if "monthly" or "annually" is logged
  console.log("Toggle Pricing Function:", togglePricing); // Should not be undefined

  return (
    <div>
      <h1 className='text-price  font-bold py-7 opacity-95'>Our Pricing</h1>
      <label className="inline-flex items-center cursor-pointer">
        <span className="me-4 text-xs font-medium text-details dark:text-gray-300"><b>Annually</b></span>

        <input
          onChange={togglePricing}
          type="checkbox"
          className="sr-only peer"
        />
        <div
          className="toggle peer"
        ></div>

        <span className="ms-4 text-xs font-medium text-details dark:text-gray-300"><b>Monthly</b></span>
      </label>

      <div></div>
      <div className='cards flex flex-col sm:flex-col gap-8 sm:gap-0 md:flex-row my-12'>
        <div className=' basic bg-white h-96 w-80' >
          <p>Basic</p>
          {type == "annually" ? (<h1><span>$</span>199.99</h1>) : (<h1><span>$</span>19.99</h1>)}
          <p>  500 GB Storage
          </p>
          <p>  2 Users Allowed
          </p>
          <p>  Send up to 3 GB
          </p>
          <button>  Learn More
          </button>
        </div>
        <div className='professional bg-primary-gradient  h-96 w-80 sm:h-128 sm:w-72  sm:relative static -top-8 rounded-lg '>  <p>Professional</p>
          {type == "annually" ? (<h1><span>$</span>249.99</h1>) : (<h1><span>$</span>24.99</h1>)}

          <p>  1 TB Storage
          </p>
          <p>  5 Users Allowed
          </p>
          <p>  Send up to 10 GB
          </p>
          <button>  Learn More
          </button>
        </div>
        <div className=' master bg-white h-96 w-80 '>
          <p>Master</p>
          {type == "annually" ? (<h1><span>$</span>399.99</h1>) : (<h1><span>$</span>39.99</h1>)}
          <p>  2 TB Storage
          </p>
          <p>  10 Users Allowed
          </p>
          <p>  Send up to 20 GB
          </p>
          <button>  Learn More
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
