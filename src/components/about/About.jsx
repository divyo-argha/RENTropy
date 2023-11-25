import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome toRENTropy, Your Gateway to Exceptional Stays </p>

<p>Embark on a journey with RENTropy, a passion project born from the love of travel and the desire to redefine the way we experience destinations.
   More than just a house rental website, we are curators of unique homes, each telling a story and offering unparalleled experiences. 
   Our team, a blend of travel enthusiasts and hospitality experts, carefully selects each property, ensuring a seamless fusion of comfort and sophistication.
</p>

  <p>Our commitment goes beyond providing accommodations; it extends to crafting personalized experiences for every traveler. With a diverse range of handpicked homes, from cozy retreats to luxurious villas, we cater to individual tastes and occasions. We believe in quality assurance, meticulously screening each property to guarantee cleanliness and comfort.
    
RENTropy is your local guide in a global community. Rooted in various destinations, our team offers insights and recommendations to make your stay truly immersive. Our user-friendly platform and attentive customer support ensure a stress-free booking experience, allowing you to focus on the excitement of your upcoming stay.

Our mission is simple- to turn every trip into a memorable chapter of your life story. We invite you to explore the world with us, discovering the joy of staying in a place that feels like your own. Whether you seek a tranquil escape, a family-friendly haven, or an urban retreat, RENTropy is here to be your gateway to extraordinary stays.

Join our community of travelers who have embraced the joy of discovering the perfect stay.</p> 
<p>Your adventure begins here with RENTropy.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
