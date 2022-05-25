import { Container } from "./styles"

export const Login = () => {
    return (
        <Container>
            <div className="login--img">
                <h2>.hasty</h2>
            </div>
            <div className="login--form">
                <form>
                    <label>CPF</label>
                    <input type="text" placeholder="000.000.000-00" />

                    <label>Password</label>
                    <input type="password"  />

                    <button className="login--btn">Sign In</button>
                </form>
            </div>
        </Container>
    )
}