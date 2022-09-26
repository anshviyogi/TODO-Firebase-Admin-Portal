import React,{useEffect,useState} from 'react'
import { Container, Table } from 'react-bootstrap'
import { db } from '../../firebase'

function Tasks() {
  const[todo1Data,setTodo1Data] = useState([])
  const[todo2Data,setTodo2Data] = useState([])

  useEffect(()=>{
  // Getting "todos" collection data from firebase
  db.collection("todos").get().then(data =>{
    if(data.docs.length > 0){
      data.docs.forEach(dataList =>{
        setTodo1Data(prev =>{
          return [...prev,dataList.data()]
        })
      })
    }
  })

  // Getting "todo2" collection data from firebase
  db.collection("todo2").get().then(data =>{
    if(data.docs.length > 0){
      data.docs.forEach(dataList =>{
        setTodo2Data(prev =>{
          return [...prev,dataList.data()]
        })
      })
    }
  })

},[])

console.log("Todo 1 >>>",todo1Data)
console.log("Todo 2 >>>",todo2Data)

  return (
    <Container>
        <h1>Tasks Page</h1>

        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Task Title</th>
          <th>Task Description</th>
          <th>Task List Title</th>
          <th>Create By (email id)</th>
          <th>Creation Time</th>
        </tr>
      </thead>
      <tbody>

{/* First collection */}
        {
          todo1Data.map((todo1,index) =>{
            return <tr key={index}>
            <td>Task List 1</td>
            <td>{todo1.description}</td>
            <td>{todo1.title}</td>
            <td>{todo1.createdBy}</td>
            <td>{todo1.creationTime}</td>
          </tr>
          })
        }

{/* Second collection */}
        {
          todo2Data.map((todo1,index) =>{
            return <tr key={index}>
            <td>Task List 2</td>
            <td>{todo1.description}</td>
            <td>{todo1.title}</td>
            <td>{todo1.createdBy}</td>
            <td>{todo1.creationTime}</td>
          </tr>
          })
        }
        
      </tbody>
    </Table>

    </Container>
  )
}

export default Tasks
