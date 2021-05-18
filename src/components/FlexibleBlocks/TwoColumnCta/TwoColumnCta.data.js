module.exports = () => {
  return `
    heading
    subheading
    text
    button {
      url
      title
    }
    image {
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    alignment
  `
}