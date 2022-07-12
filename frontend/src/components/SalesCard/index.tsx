import NotificationButton from '../NotificationButton'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'

function SalesCard() {
    return (
        <div className="dev-meta-card">
            <h2 className="titulo-vendas">VENDAS</h2>
            <div>
                <div className="dev-meta-form-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dev-meta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dev-meta-form-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dev-meta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="dev-meta-table">
                    <thead>
                        <tr>
                            <th className="hidden hidden-tablet">ID</th>
                            <th className="hidden">Data</th>
                            <th>Vendedor</th>
                            <th className="hidden hidden-tablet">Visitas</th>
                            <th className="hidden hidden-tablet">Vendas</th>
                            <th>Total (R$)</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="hidden hidden-tablet">204</td>
                            <td className="hidden">09/07/2022</td>
                            <td>Felipe</td>
                            <td className="hidden hidden-tablet">25</td>
                            <td className="hidden hidden-tablet">103</td>
                            <td>25.000,00</td>
                            <td>
                                <div>
                                    <div className="btn-notifica">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="hidden hidden-tablet">204</td>
                            <td className="hidden">09/07/2022</td>
                            <td>Felipe</td>
                            <td className="hidden hidden-tablet">25</td>
                            <td className="hidden hidden-tablet">103</td>
                            <td>25.000,00</td>
                            <td>
                                <div>
                                    <div className="btn-notifica">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SalesCard