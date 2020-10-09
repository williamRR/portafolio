import React from 'react'

const Site = ({ site }) => {

  return (
    <div container className="m-2">
      <div className="row">
        <div className="col-md-5 m-1">
          <img width="100%" className="m-2" src={site.image} href={site.url} alt="site" />
        </div>
        <div className="col-1"></div>
        <div className="col-md-5 m-1">
          <h3>{site.title}</h3>
          <h4>{site.description}</h4>
          <a href={site.url}></a>
        </div>
      </div>
    </div>
  )
}

export default Site
