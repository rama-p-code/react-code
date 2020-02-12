import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayTitle = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Statistic = ({text,value}) => {
  return (
    <tr><td>{text}</td><td align="right">{value}</td></tr>
  )
}

const Stats = ({stats}) => {
  //console.log(stats)
  let averageF=0
  let positiveF='0%'
  let allF=0
  if (stats.good + stats.neutral + stats.bad > 0) {
    allF = stats.good + stats.bad + stats.neutral
    averageF = ((stats.good - stats.bad)/allF).toFixed(1)
    positiveF = ((stats.good*100)/allF).toFixed(1) + '%'
    return (
      <table><tbody>
        <Statistic text="good" value={stats.good} />
        <Statistic text="neutral" value={stats.neutral} />
        <Statistic text="bad" value={stats.bad} />
        <Statistic text="all" value={allF} />
        <Statistic text="average" value={averageF} />
        <Statistic text="positive" value={positiveF} />
        </tbody></table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
  
}

const App = (props) => {
    const [ feedback, setFeedback ] = useState({
      good: 0, bad: 0, neutral: 0
    })
    let newFeedback = {
      good: feedback.good,
      bad: feedback.bad,
      neutral: feedback.neutral
    } 
    const setValue = (value) => {      
      switch (value) {
        case 'good':
          newFeedback = {
            good: feedback.good + 1,
            bad: feedback.bad,
            neutral: feedback.neutral
          }
          break;          
        case 'bad':
          newFeedback = {
            good: feedback.good,
            bad: feedback.bad + 1,
            neutral: feedback.neutral
          }
          break;
        case 'neutral':
          newFeedback = {
            good: feedback.good,
            bad: feedback.bad,
            neutral: feedback.neutral + 1
          }
          break;
        default:
          break;
      }
      //console.log(newFeedback)
      return (
        setFeedback(newFeedback)  
      )
    }
  
    return (
      <div>
        <DisplayTitle title="give feedback" />
        <Button handler={()=>setValue('good')} text=" good " />
        <Button handler={()=>setValue('neutral')} text=" neutral " />
        <Button handler={()=>setValue('bad')} text=" bad " />
        <DisplayTitle title="statistics" />
        <Stats stats={feedback} />
      </div>
    )
  }

 ReactDOM.render(<App />, document.getElementById('root'))