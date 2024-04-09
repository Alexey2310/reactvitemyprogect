import { FC } from "react"
import { about } from "../data"


export const About:FC= () => {
  return (
    <div>{about.map(i=>{
      return (<li key={i.title}>
        <h3>{i.title}</h3>
        {i.info.map((el,index)=>(<p key={index}>{el}</p>))}
        </li>)
    })}</div>
  )
}
