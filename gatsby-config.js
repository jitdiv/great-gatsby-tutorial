module.exports =  {
  siteMetadata: {
    title: 'Sample Gatsby',
    author: 'Sample author'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
}
