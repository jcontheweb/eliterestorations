module.exports = () => {
  return `
    heading
    backgroundImage {
      sourceUrl
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `
}
