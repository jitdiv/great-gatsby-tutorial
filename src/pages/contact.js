import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ContactPage = () => {
  return (
    <div>
    <Layout>
      <h1>Contact</h1>
        <p>This is how to contact us: <Link to="/">info@sample.com</Link></p>
    </Layout>
    </div>
  )
}

export default ContactPage