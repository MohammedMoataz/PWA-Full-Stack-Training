export const GrandChild = (props) => {
    return (
        <div className="grandChild">
            <h4>GrandChild Component</h4>

            <p>Name: {props.objectData.name}</p>
            <p>Email: {props.objectData.email}</p>

            <ul className="list">
                {props.arrayData.map(element => (
                    <li key={element.id}>{element.id}: Course: {element.course} - Trainer: {element.trainer}</li>
                ))}
            </ul>
        </div>
    )
}
