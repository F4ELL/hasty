import { Container } from "./styles"

export const SignUp = () => {
    return (
        <Container>
            <div className="login--img">
                <h2>.hasty</h2>
            </div>
            <div className="login--form">
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="hasty" />

                    <label>CPF</label>
                    <input type="text" placeholder="000.000.000-00" />

                    <label>E-mail</label>
                    <input type="text" placeholder="hasty@email.com" />

                    <label>Phone</label>
                    <input type="text" placeholder="(00) 0 0000-0000" />

                    <label>Password</label>
                    <input type="password"  />

                    <button className="login--btn">Sign Up</button>
                </form>
            </div>
        </Container>
    )
}