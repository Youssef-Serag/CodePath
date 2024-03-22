const Gallery = ({ images }) => {
  return (
    <div>
      <h2> Your Screenshot Gallery</h2>
      <div>
        {images && images.length > 0 ? (
          images.map((pic, index) => (
            <li>
              <img
                className="gallery-screenshot"
                src={pic}
                alt="Undefined screenshot from query"
                width={500}
                key={index}
              />
            </li>
          ))
        ) : (
          <div>
            <h3> You haven't made a screenshot!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
