const ReviewInfo = (props) => {
  console.log(props)
  const { results } = props
  const elements = results.map(item => 
  <li key={item.id} >
      <h2>Author: {item.author}</h2>
      <p>{item.content}</p>
  </li>)
  const filter = results.length === 0;
  return (
    <div>
      {!filter && <ul>
        {elements}
      </ul>}
      {filter && <p>We don't have any reviews for this movie </p>}
    </div>
  );
};

export default ReviewInfo;