import Header from "./components/Header"
import SalesReportTitle from "./components/SalesReportTitle"
import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dev-meta-container">
            <SalesReportTitle />
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App