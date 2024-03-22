import './styles.css'

function ItemList(props){
  return (
    <div className="item-list">
        <strong>{props.title}</strong>
        <p>{props.description}</p>

        <hr />
    </div>
  )
}

export default ItemList;