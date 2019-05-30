import React from 'react'

const Course = ({ course }) => {
    const total = (exercises) => exercises.reduce((a, b) => a + b.exercises, 0);
    return (
      <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total sumOfexercises={total(course.parts)} />
      </>
    )
  }
  
  const Header = (props) => {
    return (
      <>
        <h1>{props.course.name}</h1>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <>
        <p>
          {props.name} {props.exercises}
        </p>
      </>
    )
  }
  
  const Content = ({ parts }) => {
    const renderParts = (parts) => parts.map((part, i) =>
      <Part key={i} name={part.name} exercises={part.exercises} />
    )
    return (
      <>
        {renderParts(parts)}
      </>
    )
  }
  const Total = (props) => {
    return (
      <>
        <p>yhteensä {props.sumOfexercises} tehtävää</p>
      </>
    )
  }


export default Course