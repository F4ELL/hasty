import { RequestItem } from "../../components/RequestItem"
import { Container } from "./styles"

export const Requests = () => {
    return (
        <Container>
            <h2>Requests</h2>

            <div className="requests--area">
                <RequestItem title='Lorem ipsum is placeholder text commonly used in the graphics.' date='17/05/2022' status="Active" />
                <RequestItem title='Lorem ipsum is placeholder text commonly used in the graphics.' date='17/05/2022' status="Pending" />
                <RequestItem title='Lorem ipsum is placeholder text commonly used in the graphics.' date='02/05/2022' status="Closed" />
            </div>
        </Container>
    )
}