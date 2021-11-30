import './about.css'
import axios from "axios"
import {useEffect, useState} from "react"

export default function About(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('/api/contact/reachme', {
      name: name,
      email:email,
      telephone:telephone,
      description: description
    }).then(res => {
      const contact = res.data;
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="container">
      <h1>About us</h1>
      <h6>low waste & sustainable | vegan & cruelty-free | safe & healthy</h6>

      <h3>Low waste & sustainable</h3>
      <p>We are committed to eliminating single-use plastics by providing reusable alternatives for many of our everyday disposable items. While our priority is stocking plastic-free and plant-based products, some of our items contain minimal amounts of plastic. All plastic present in our product packaging is BPA and phthalate-free and can be reused or recycled.</p>
      <h3>Vegan & cruelty-free</h3>
      <p>You may think that all vegan products are cruelty-free, and all cruelty-free products are vegan, but sadly, that is not always the case. For us, we will never compromise our values on this. Animals are not here for us to experiment on, eat, wear, or take advantage of in any way. The Earth provides humans with every plant and mineral we need to thrive, so why resort to cruelty? Not to mention, raising animals to use for mass production also requires vast amounts of land, water, energy and increases our greenhouse gas emissions.</p>
      <h3>Safe & Healthy</h3>
      <p>We are passionate about providing people with entirely healthy products for them to use in their homes and on their bodies. With Natalie’s Multiple Chemical Sensitivity, we experienced many days where she would be hit with a migraine or asthma attack triggered by a new “natural” product. We never stock products that contain phthalates, artificial musks or synthetic fragrances. All of our scented products use only 100% pure essential oils and list all ingredients. We care about your well-being and believe you have the right to be an informed consumer.</p>
      <h3>Ethical and environmental guidelines</h3>
      <p>All of our products are personally evaluated and thoroughly researched before they reach our shop. So you can shop with ease knowing that all of our products are vegan, cruelty-free, Earthc-consciously packaged (minimal or no plastic), BPA free, synthetic fragrance-free, Synthetic frangrance-free, Petrochemical-free, ethnically sourced, made by people earning a fair living wage, something we would use ourselves, and completely awesome.  </p>
      <p>If you have any questions or concerns about our products or philosophy, please feel free to contact us.</p>

      <form onSubmit={handleSubmit}>

      <label> 
        Name 
      <input
      text="name"
      required
      value={name}
      placeholder="Please enter your name"
      onChange={(e) => setName(e.target.value)}
      >
      </input>
      </label>

      <label> 
        Email
      <input
      text="email"
      required
      value={email}
      placeholder="Please enter your email"
      onChange={(e) => setEmail(e.target.value)}
      
      >
      </input>
      </label>

      <label> 
        Phone Number
      <input
      text="tel"
      required
      value={telephone}
      placeholder="Please enter your phone number" 
      onChange={(e) => setTelephone(e.target.value)}
      >
      </input>
      </label>

      <label> 
        Description
      <input
      text="text"
      required
      value={description}
      placeholder="Please enter description" 
      onChange={(e) => setDescription(e.target.value)}
      >
      </input>
      </label>

      <button>Send</button>
      </form>
      
    </div>
  )
}