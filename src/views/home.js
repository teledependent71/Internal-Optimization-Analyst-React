import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Optimization Analyst</title>
        <meta property="og:title" content="Internal Optimization Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
