const App = () => {
	return (
		<div>
			<Tweet
				username="nasjones"
				name="Nassir Jones"
				message="Hello"
				date="Today"
			/>

			<Tweet username="nasP" name="Nas Pones" message="Bye" date="Yesterday" />

			<Tweet
				username="nasjones"
				name="Nassir Jones"
				message="Wait"
				date="Tomorrow"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
