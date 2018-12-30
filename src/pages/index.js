import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`applicative`, `ltd`, `blog`]} />
    <h1>Applicative Ltd.</h1>
  </Layout>
)

export default IndexPage
