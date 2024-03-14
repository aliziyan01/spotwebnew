import { FC } from "react"
const Button:FC<{text:string}> = ({text}) => {
    return (
    <div>
       <button className="bg-L_primary text-white px-6 py-2 rounded-full">{text}</button>
    </div>
  )
}

export default Button
