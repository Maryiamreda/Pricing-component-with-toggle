import { useContext } from 'react'

import './App.css'
import { PricingContext } from './toggle'

function App() {
  const { type, togglePricing } = useContext(PricingContext)
  console.log("Pricing Type:", type); // Check if "monthly" or "annually" is logged
  console.log("Toggle Pricing Function:", togglePricing); // Should not be undefined

  return (
    <div className=''>
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
      <div className='cards flex flex-col sm:flex-col gap-8 sm:gap-0 md:flex-row my-10'>
        <div className=' basic bg-white h-96 w-72 p-7' >
          <p className="ms-4 text-sm font-bold text-price  opacity-80">Basic</p>
          {type == "annually" ? (<h1 className='font-bold  text-price'><span>$</span><span className=' text-5xl'>199.99</span></h1>) : (<h1 className='font-bold  text-price'><span>$</span><span className=' text-5xl'>19.99</span></h1>)}
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-headers dark:text-gray-300 opacity-95'>  500 GB Storage
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-headers dark:text-gray-300 opacity-95'>  2 Users Allowed
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-headers dark:text-gray-300 opacity-95'>  Send up to 3 GB
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <button className="bg-primary-gradient text-white text-xs  font-medium py-2 px-3  rounded shadow-lg">  Learn More
          </button>
        </div>
        <div className='professional p-10 bg-primary-gradient  h-96 w-72 sm:h-128 sm:w-72 md:w-72 md:h-128  sm:relative static -top-4 rounded-lg '>
          <p className="ms-4 text-sm text-white font-bold opacity-90 ">Professional</p>

          {type == "annually" ? (<h1 className='font-bold  text-white '><span className=''>$</span> <span className=' text-5xl'>249.99</span></h1>) : (<h1 className='font-bold  text-white  '><span>$</span><span className=' text-5xl'>24.99</span></h1>)}
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-white dark:text-gray-300 opacity-95'>  1 TB Storage
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-white dark:text-gray-300 opacity-95'>  5 Users Allowed
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-white dark:text-gray-300 opacity-95'>  Send up to 10 GB
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <button className="bg-white text-gradiant text-xs  font-bold py-2 px-5  rounded shadow-lg">  Learn More
          </button>
        </div>
        <div className=' master  bg-white h-96 w-72 p-7 '>
          <p className='ms-4  font-bold text-price  text-sm opacity-80'>Master</p>

          {type == "annually" ? (<h1 className='font-bold  text-price'><span>$</span><span className=' text-5xl'>399.99</span></h1>) : (<h1 className='font-bold  text-price '><span>$</span><span className=' text-5xl'>39.99</span></h1>)}
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-headers dark:text-gray-300 opacity-95'>  2 TB Storage
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-headers dark:text-gray-300 opacity-95'>  10 Users Allowed
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <p className='me-4 text-xs font-bold text-headers dark:text-gray-300 opacity-95'>  Send up to 20 GB
          </p>
          <hr className="h-1 w-62  border-1 dark:bg-gray-700" />

          <button className="bg-primary-gradient text-white text-xs  font-medium py-2 px-3 rounded shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
