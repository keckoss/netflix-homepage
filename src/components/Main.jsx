function Main(props) {
  console.log(props);
  return (
    <div className="test1">
      {props.data.map((element) => (
        <div key={element.id}>
          <h2>{element.category}</h2>
          <div className="test">
            {element.images.map((image) => (
              <img key={image.id} src={image} alt={image.alt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
