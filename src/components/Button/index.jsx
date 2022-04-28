import { Container } from "./style"

const Button = ({children, handleClick}) => {
    return <Container onClick={() => handleClick()}>{children}</Container>
}

export default Button