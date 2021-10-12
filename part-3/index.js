const App = () => {
	return (
		<div>
			<Person
				name="Nassir Jones"
				age={25}
				hobbies={["Gaming", "Eating", "Being funny"]}
			/>

			<Person name="Chris" age={15} hobbies={["Being young", "Smelling"]} />

			<Person
				name="James"
				age={25}
				hobbies={["Gaming", "Eating", "Being funny"]}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
