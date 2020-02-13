import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
  const parts = [...course.parts]
  const total = parts.reduce((a,b) =>{ 
    return a + b.exercises
  },0)
  //parts.forEach(function(item, index, array){
  //  total += item.exercises
  //})
  console.log(total)
  
  return(
    <div>
      <h1>{course.name}</h1>
      {parts.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}
      <p><strong>total of {total} exercises</strong></p>
    </div>
  )
}
const Courses = ({courses}) => {
  return (
    <div>
      {courses.map(course=><Course course={course} />)}
    </div>
  )
}
const App = () => {
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)