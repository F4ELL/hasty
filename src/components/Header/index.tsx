import { Container } from "./styles"
import logoImg from '../../assets/images/logo.png'
import { Button } from "../Button"

export const Header = () => {
    return (
        <Container>
            <img src={logoImg} alt="Hasty" />
            <Button btnText='New Request' />
        </Container>
    )
}