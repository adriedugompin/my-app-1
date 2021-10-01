import React from 'react'

/*
[{id:1, tarea:"uno"}] utilizando map sobre este array
podriamos convertir los objetos tipo {id:1, tarea:"uno"}
en una cadena = 1_uno
*/

export function TaskList({ tasks }) {
  return (
    <ul>
      {
        tasks.map((task) => <li>tarea {task.label}</li>)
      }
    </ul>
  )
}