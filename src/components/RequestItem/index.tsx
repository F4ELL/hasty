import { Container } from "./styles"

interface TRequestItemProps {
    title: string,
    date: any,
    status: string
}

export const RequestItem = ({ title, date, status }: TRequestItemProps) => {
    return (
        <Container>
            <p>{title}</p>
            <div className="requests-item--info">
                <span>{date}</span>
                <span>{status}</span>
            </div>
        </Container>
    )
}