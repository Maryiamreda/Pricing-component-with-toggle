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
          <p className="ms-4 text-base font-bold text-price  opacity-95">Basic</p>
          {type == "annually" ? (<h1 className='font-bold  text-price'><span>$</span><span className=' text-5xl'>199.99</span></h1>) : (<h1 className='font-bold  text-price'><span>$</span><span className=' text-5xl'>19.99</span></h1>)}
          <p>  500 GB Storage
          </p>
          <p>  2 Users Allowed
          </p>
          <p>  Send up to 3 GB
          </p>
          <button>  Learn More
          </button>
        </div>
        <div className='professional bg-primary-gradient  h-96 w-80 sm:h-128 sm:w-75  sm:relative static -top-8 rounded-lg '>
          <p className="ms-4 text-base text-white font-bold opacity-95 ">Professional</p>
          {type == "annually" ? (<h1 className='font-bold  text-white '><span className=''>$</span> <span className=' text-5xl'>249.99</span></h1>) : (<h1 className='font-bold  text-white  '><span>$</span><span className=' text-5xl'>24.99</span></h1>)}

          <p>  1 TB Storage
          </p>
          <p>  5 Users Allowed
          </p>
          <p>  Send up to 10 GB
          </p>
          <button>  Learn More
          </button>
        </div>
        <div className=' master  bg-white h-96 w-80 '>
          <p className="ms-4  font-bold text-base opacity-95">Master</p>
          {type == "annually" ? (<h1 className='font-bold  text-price'><span>$</span><span className=' text-5xl'>399.99</span></h1>) : (<h1 className='font-bold  text-price '><span>$</span><span className=' text-5xl'>39.99</span></h1>)}
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
