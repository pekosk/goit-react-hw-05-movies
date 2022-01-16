const CastInfo = (props) => {
    const { cast } = props
  const elements = cast.map(item => <li key={item.id} >
      {item.profile_path && <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt="profile" />}
      {!item.profile_path && <img src={`https://static.wikia.nocookie.net/c6ba7146-6824-46bc-b976-8778d2cbcc85/scale-to-width/755`} width='300px' alt="profile" />}
      <p>{item.name}</p>
      <p>{item.character}</p>
  </li>)

  return (
    <div>
      <ul>
        {elements}
      </ul>
    </div>
  );
};

export default CastInfo;