import icon from '../../assets/img/send.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="btn-notifica">
            <img src={icon} alt="send" className="notifica" />
        </div>
    )
}

export default NotificationButton