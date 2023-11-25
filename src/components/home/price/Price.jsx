import React from "react"
import Heading from "../../common/Heading"
import PriceCard from "./PriceCard"
import "./price.css"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Customize your stay, offering curated choices to elevate your experience and tailor your getaway to perfection.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
