import './index.css';
import Button from '../Button';

const DeleteModal = ({modalContent, setCondition, setVisibile, deleteFn}) => {
    return (
        <div className='Modal'>
            <div className="Modal__content">
                
                <p>{modalContent}</p>
               
                <div className='Modal__Buttons'>
                    <Button onClick={() => {
                        setCondition(false)
                        setVisibile(false)}} color='lightcoral' textContent='Cancel'/>
                    <Button onClick={() => {
                        setCondition(true);
                        setVisibile(false)
                        deleteFn();
                    }} color='lightseagreen' textContent='Yes'/>
                    
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;