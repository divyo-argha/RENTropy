import React from "react"
import Heading from "../../common/Heading"
import RecentCard from "./RecentCard"
import "./recent.css"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' 
            subtitle='Experience unparalleled comfort and style in our curated selection of rental properties. 
              From cozy retreats to luxurious homes, each stay promises a unique blend of comfort and local charm. 
              Book your dream escape now and create lasting memories in a home away from home' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
