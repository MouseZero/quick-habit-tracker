import React from 'react'
import './App.css'
import uuid from 'uuid/v1'

const HABITS_NAME = 'habits'

class App extends React.Component {
	constructor(props) {
		super(props)
		const saved = getSavedHabits()
		if (!saved) saveHabits({})
		const habits = saved ? saved : {}
		this.state = {
			newHabitName: '',
			habits
		}
	}

	handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({[name]: value})
	}

	createHabit = (name) => () => {
		const current = getSavedHabits();
		current[uuid()] = {name, did: 0, didNot: 0, alt: 0}
		saveHabits(current)
		this.loadSavedData()
	}

	loadSavedData = () => {
		this.setState({
			habits: getSavedHabits()
		})
	}

	updateCount = (e) => {
		const meta = e.target.name.split('--')
		saveCountIncrement(meta[0], meta[1])
		this.loadSavedData()
	}

	render() {
		const {habits} = this.state
		return (
			<div className="App">
				<input
					name="newHabitName"
					value={this.state.newHabitName}
					onChange={this.handleChange}
				></input>
				<button
					onClick={this.createHabit(this.state.newHabitName)}
				>New Habit</button>
				{Object.keys(habits).map(key =>
					<div key={key}>
					<h3>{habits[key].name}</h3>
						<div>
							{habits[key].did}
							<button
								name={key + '--did'}
								onClick={this.updateCount}
							>Did</button>
						</div>
						<div>
							{habits[key].didNot}
							<button
								name={key + '--didNot'}
								onClick={this.updateCount}
							>Did Not</button>
						</div>
						<div>
							{habits[key].alt}
							<button
								name={key + '--alt'}
								onClick={this.updateCount}
							>Alt</button>
						</div>
					</div>
				)}
			</div>
		)
	}
}

function getSavedHabits () {
	return JSON.parse(localStorage.getItem(HABITS_NAME))
}

function saveHabits (data) {
	localStorage.setItem(HABITS_NAME, JSON.stringify(data))
}

function saveCountIncrement (uuid, type) {
	const habits = getSavedHabits()
	saveHabits(Object.assign(
		habits,
		{
			[uuid]: Object.assign(
				habits[uuid],
				{
					[type]: habits[uuid][type] + 1
				}
			)
		}
	))
}

export default App;
