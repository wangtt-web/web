import Header from '../header'
import Footer from '../footer'
import './style.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
