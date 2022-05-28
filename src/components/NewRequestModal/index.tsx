import Modal from 'react-modal' 
import { Container } from './styles'
import closeImg from '../../assets/svgs/close.svg'

interface TNewRequestModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export const NewRequestModal = ({ isOpen, onRequestClose }: TNewRequestModalProps) => {
    return (
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
            >

                <button 
                    type='button'
                    onClick={onRequestClose}
                    className='react-modal-close'
                >
                    <img src={closeImg} alt="Close Modal" />
                </button>

                <Container>
                    <h2>New Request</h2>

                        <label>
                            Product
                        </label>
                        <input type="text" placeholder='Example'/>

                        <label>
                            Address
                        </label>
                        <input type="text" placeholder='Address 01'/>
                        
                        <label>
                            Destiny
                        </label>
                        <input type="text" placeholder='Example'/>
                        
                        <label>
                            Dimensions
                        </label>
                        <input type="text" placeholder='10x10'/>

                        <label>
                            Weight
                        </label>
                        <input type="text" placeholder='20kg'/>

                        <button type='button'>
                            Confirm
                        </button>

                </Container>
            </Modal>
    )
}