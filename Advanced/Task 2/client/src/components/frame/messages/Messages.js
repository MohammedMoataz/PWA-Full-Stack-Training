export const Messages = props => <div className="messages">
    <ul>{props.messages
        .map((msg, index) => <li
            key={index}
            className={msg.type}
        >{msg.msg}</li>)
    }</ul>
</div>