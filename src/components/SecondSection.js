import React from 'react'
import { Container } from 'react-bootstrap'
import Site from './Site'
const SecondSection = () => {

  const sectionStyle = {
    // marginTop: "100vh",

  }

  const websites = [{
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam perferendis, quo voluptatum laboriosam itaque. Nulla repellat numquam doloribus sunt."
  },{
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam perferendis, quo voluptatum laboriosam itaque. Nulla repellat numquam doloribus sunt."
  },{
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam perferendis, quo voluptatum laboriosam itaque. Nulla repellat numquam doloribus sunt."
  },{
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam perferendis, quo voluptatum laboriosam itaque. Nulla repellat numquam doloribus sunt."
  }, {
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam perferendis, quo voluptatum laboriosam itaque. Nulla repellat numquam doloribus sunt."
  }]
  return (
    <Container id="secondSection" style={sectionStyle}>
        {websites.map((site) => {
          return (
            <Site
              key={websites.indexOf(site)}
              site={site}
              reverse={websites.indexOf(site)%2 === 0}
            />)
        })}
    </Container>
  )
}

export default SecondSection
