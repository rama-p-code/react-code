import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const RandomNumber = (value) => {
  let rn = Math.floor((Math.random()*value))
  return rn
}

const DisplayTitle = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getQuote = () => {
     setSelected(RandomNumber(anecdotes.length))
  }
  
  const addVote = (value) => {
    let temp = [...votes]
    //console.log(temp)
    temp[value]++
    setVotes(temp)
    console.log(votes)    
  }
  
  const mostVotes = () => {
     let maxX = Math.max(...votes)
     return (
       votes.indexOf(maxX)
     )  
  }
  return (    
    <div>
      <DisplayTitle title="Anecdote of the day" />      
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handler={()=>addVote(selected)} text="vote" />
      <Button handler={()=>getQuote()} text="next anecdote" />
      <DisplayTitle title="Anecdote with most votes" />
      <p>{anecdotes[mostVotes()]}</p>
      <p>has {votes[mostVotes()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'This is another comment to increase the anecdote length'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)