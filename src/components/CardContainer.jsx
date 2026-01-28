import CardComponent from "./CardComponent";

const CardContainer = ({ title }) => {
  return (
    <div className="cardContainer">
      <h1 className="containerTitle">{title}</h1>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};
export default CardContainer;
