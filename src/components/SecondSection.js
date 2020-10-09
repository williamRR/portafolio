import React from 'react'
import Site from './Site'
const SecondSection = () => {

  const websites = [{
    title: "Mobike",
    url: "https://mobikewr.herokuapp.com/",
    image: "mobike.png",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam perferendis, quo voluptatum laboriosam itaque. Nulla repellat numquam doloribus sunt."
  }]
  return (
    <div id="secondSection">
      <div className="container">
        {websites.map((site) => {
          return (
            <Site
              key={websites.indexOf(site)}
              site={site}
            />)
        })}
      </div>
    </div>
  )
}

export default SecondSection
