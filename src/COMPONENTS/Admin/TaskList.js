import React from 'react'
import { useState,useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import {db} from '../../firebase'

function TaskList() {
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

  return (
    <div>
        <Container>
            <h1>Task List </h1>
        <Table striped bordered hover size="sm">
       <thead>
         <tr>
           <th>Task List Title</th>
           <th>Created By</th>
           <th>Number of tasks</th>
           <th>Creation Time</th>
           <th>Last Updated</th>
         </tr>
       </thead>
       <tbody>

{/* TODO 2 DATA MANAGEMENT */}
       {
            todo2Data.map((data,index) =>{
                let count = 0
                let email = ""
                let time = ""
                // nested 
                todo2Data.map((newData,index)=>{
                    
                    if(data.createdBy === newData.createdBy){
                        count = count + 1
                        email = data.createdBy
                        time = data.creationTime
                    }
                    
                })
                console.log("count >>>" ,count)
                console.log("Email >>>",email)
                return <tr>
                <td>Title 2</td>
                <td>{email}</td>
                <td>{count}</td>
                <td>{time}</td>
              </tr>
            })
        }

         {/* TODO DATA 1 MANAGEMENT */}

         {
            todo1Data.map((data,index) =>{
                let count = 0
                let email = ""
                let time = ""
                // nested 
                todo1Data.map((newData,index)=>{
                    
                    if(data.createdBy === newData.createdBy){
                        count = count + 1
                        email = data.createdBy
                        time = data.creationTime
                    }
                    
                })
                console.log("count >>>" ,count)
                console.log("Email >>>",email)
                return <tr>
                <td>Title 1</td>
                <td>{email}</td>
                <td>{count}</td>
                <td>{time}</td>
              </tr>
            })
        }

       </tbody>
     </Table> 
        </Container>
    </div>
  )
}

export default TaskList