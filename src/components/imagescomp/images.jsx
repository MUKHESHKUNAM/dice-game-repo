import "../imagescomp/image.css";
export const Images = (props) => {
  return (
    <>
      <div className="diceimg">
        <img src={`/src/assets/images/dice-${props.randomnum}.png`} />
      </div>
    </>
  );
};

