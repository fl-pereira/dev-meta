import axios from 'axios';
import icon from '../../assets/img/send.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("deu bom");
        });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="btn-notifica" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="send" className="notifica" />
        </div>
    )
}

export default NotificationButton