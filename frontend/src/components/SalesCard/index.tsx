import NotificationButton from '../NotificationButton'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/request'
import { Sale } from '../../models/sale'

function SalesCard() {

    const pastDate = new Date(new Date().setDate(new Date().getDate() - 90));
    const [minDate, setMinDate] = useState(pastDate);
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const datemin = minDate.toISOString().slice(0, 10);
        const datemax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?minDate=${datemin}&maxDate=${datemax}`)
            .then(response => {
                setSales(response.data.content)
            })
    }, [minDate, maxDate]);

    return (
        <div className="dev-meta-card">
            <h2 className="titulo-vendas">VENDAS</h2>
            <div>
                <div className="dev-meta-form-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dev-meta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dev-meta-form-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
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

                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="hidden hidden-tablet">{sale.id}</td>
                                    <td className="hidden">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="hidden hidden-tablet">{sale.visited}</td>
                                    <td className="hidden hidden-tablet">{sale.deals}</td>
                                    <td>{sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div>
                                            <div className="btn-notifica">
                                                <NotificationButton saleId={sale.id} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SalesCard