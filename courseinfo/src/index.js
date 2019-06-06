import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return (
            <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
            <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
    const part1 = props.parts[0].name
    const exercises1 = props.parts[0].exercises
    const part2 = props.parts[1].name
    const exercises2 = props.parts[1].exercises
    const part3 = props.parts[2].name
    const exercises3 = props.parts[2].exercises

    console.log(props)

    //<Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />   

    return (
        <div>
           <Part part={part1} exercises={exercises1} />
           <Part part={part2} exercises={exercises2} />
           <Part part={part3} exercises={exercises3} />
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    //<Total  exercises1={parts[0].exercises}  exercises2={parts[1].exercises}  exercises3={parts[2].exercises} />
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + 
            props.parts[2].exercises}</p>
    )
}

const App = () => {
const course = {
    name: 'Half stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
]
}

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
            
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))