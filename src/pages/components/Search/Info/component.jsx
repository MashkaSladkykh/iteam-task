const Info = ({query, totalItems}) => {
    return (
      <>
      <h3>Search results for: {query}</h3>
      <p>Total results: {totalItems}</p>
      </>
    )
  }
  export default Info;