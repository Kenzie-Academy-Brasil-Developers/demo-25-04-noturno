import { useState } from "react"
import { Input } from "./style"
import Button from "../Button"

const Form = ({handleAdd}) =>{

    const [todo, setTodo] = useState('')

    // const [isTrue, setIsTrue] = useState(true)

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleAdd(todo)
        setTodo('')
    }

    return (
        <>
        {/* {isTrue?
        <Button onClick={() => setIsTrue(!isTrue)}>Clique</Button>
        :
        <SecondButton onClick={() => setIsTrue(!isTrue)}>Clique</SecondButton>} */}
        <form onSubmit={(e) => handleSubmit(e)}>
            <Input type="text" placeholder="Insira a To-Do" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <Button type="submit">Adicionar</Button>
        </form>
        </>
    )
}

export default Form