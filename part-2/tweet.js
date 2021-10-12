const Tweet = (props) => {
	return (
		<div style={{ border: "1px solid black" }}>
			<h1>{props.username}</h1>
			<span>{props.name}</span>
			<h2>{props.message}</h2>
			<span>{props.date}</span>
		</div>
	);
};
