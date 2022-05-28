import { Container, SideBarItem } from "./styles"
import profileImg from '../../assets/svgs/profile.svg'
import requestsImg from '../../assets/svgs/requests.svg'
import settingsImg from '../../assets/svgs/settings.svg'
import exitImg from '../../assets/svgs/exit.svg'

export const SideBar = () => {
    return (
        <Container>
            <ul>
                <li>
                    <SideBarItem>
                        <a href="">
                            <img src={profileImg} alt="Profile" />
                            <span>Profile</span>
                        </a>
                    </SideBarItem>
                </li>
                <li>
                    <SideBarItem>
                        <a href="">
                            <img src={requestsImg} alt="Requests" />
                            <span>Requests</span>
                        </a>
                    </SideBarItem>
                </li>
                <li>
                    <SideBarItem>
                        <a href="">
                            <img src={settingsImg} alt="Settings" />
                            <span>Settings</span>
                        </a>
                    </SideBarItem>
                </li>
                <li>
                    <SideBarItem>
                        <a href="">
                            <img src={exitImg} alt="Exit" />
                            <span>Exit</span>
                        </a>
                    </SideBarItem>
                </li>
            </ul>
        </Container>
    )
}