import "./item-detail.css"

export const ItemDetail = ({img, name, description}) => {
  return (
    <>
    <div className="cards-container">
        <div className="cards">
        <img className="cards-img" src={img} />   
        <h5>{name}</h5>
        <p>{description}</p>
        </div>
        
    </div>
    </>
  )
}
