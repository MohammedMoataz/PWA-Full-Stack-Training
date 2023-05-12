export const Options = props => <div className="options">
	<p>Options:</p>
	<ul>{props.options
		.map((op, index) => <li key={index}>
			<button onClick={e => props.handleOptionClick(op)}>{op.label}</button>
		</li>)
	}</ul>
</div>