import "../../index.scss";

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(
        item => <li key={item.id}>
        {item.name}: &nbsp;
         <b>{item.calories}</b>
         </li>);

    return (

        <div>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>

        </div>


    );
}

List.defaultProps = {
    category: "Category",
    items: [],
    };


export default List;