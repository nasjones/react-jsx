const Person = (props) => {
	return (
		<div>
			<p>Learn some information about this person</p>
			<h3>{props.age >= 18 ? "please go vote!" : "you must be at least 18"}</h3>
			<span>
				{props.name.length > 8 ? props.name.substr(0, 5) : props.name}
			</span>
			<ul>
				{props.hobbies.map((hobby) => (
					<li>{hobby}</li>
				))}
			</ul>
		</div>
	);
};
