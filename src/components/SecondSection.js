import React from 'react'
import { Container } from 'react-bootstrap'
import Site from './Site'
const SecondSection = () => {

  const sectionStyle = {
    //  marginTop: "20vh",
  }

  const websites = [{
    title: "Portafolio",
    url: "https://master.d2owlgqg0u74fe.amplifyapp.com/",
    image: "portafolio.png",
    description: "Sitio desarrollado con React y React-Bootstrap. Hosteado en AWS, sitio serverless."
  },{
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Sitio tipo CRUD desarrollado con Java, MySQL, Spring Security, Thymeleaf, Bootstrap, HTML y CSS. Implementado sistema de registro y login con authorize. Hosteado e Heroku "
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
    <Container id="secondSection" style={sectionStyle} className="text-center">
      <h1 class="display-4">Proyectos</h1>
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
