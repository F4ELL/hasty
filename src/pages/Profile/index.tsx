import { Header } from "../../components/Header"
import { Container, InfoItem } from "./styles"
import { SideBar } from "../../components/SideBar"

import profilephotoImg from '../../assets/images/profilephoto.jpg'

export const Profile = () => {
    return (
        <>
            {/*<Header />*/}
            <SideBar />
            <Container>
                <div className="profile--title">
                    <span><strong>Profile</strong> Info</span>
                </div>
                <div className="profile--photo">
                    <img src={profilephotoImg} alt="Photo" />
                </div>
                <div className="profile--info-area">
                    <InfoItem>
                        <span><strong>Name</strong></span>
                        <p>Hasty</p>
                    </InfoItem>
                    <InfoItem>
                        <span><strong>CPF</strong></span>
                        <p>000.000.000-00</p>
                    </InfoItem>
                    <InfoItem>
                        <span><strong>E-mail</strong></span>
                        <p>hasty@email.com</p>
                    </InfoItem>
                    <InfoItem>
                        <span><strong>Phone</strong></span>
                        <p>(00) 0 0000-0000</p>
                    </InfoItem> 
                </div>

                <div className="profile--title">
                    <span><strong>Profile</strong> Adrees</span>
                </div>
                <div className="profile--info-area">
                    <InfoItem>
                        <span><strong>Country</strong></span>
                        <p>Hasty</p>
                    </InfoItem>
                    <InfoItem>
                        <span><strong>Street</strong></span>
                        <p>Hasty</p>
                    </InfoItem>
                    <InfoItem>
                        <span><strong>Apto/Number</strong></span>
                        <p>00</p>
                    </InfoItem>
                    <InfoItem>
                        <span><strong>City</strong></span>
                        <p>Hasty</p>
                    </InfoItem> 
                </div>

            </Container>
        </>
    )
}