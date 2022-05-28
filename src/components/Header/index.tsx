import { Container } from "./styles"
import logoImg from '../../assets/images/logo.png'

interface THeaderProps {
    onOpenNewRequestModal: () => void
}

export const Header = ({ onOpenNewRequestModal }: THeaderProps) => {

    return (
        <Container>
            <img src={logoImg} alt="Hasty" />
            <button onClick={onOpenNewRequestModal}>
                New Request
            </button>

            
        </Container>
    )
}