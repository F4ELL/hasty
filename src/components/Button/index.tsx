import { StyledButton } from "./styles"

interface TButtonProps {
    btnText: string
}

export const Button = ({ btnText }: TButtonProps) => {
    return (
        <StyledButton>
            {btnText}
        </StyledButton>
    )
}