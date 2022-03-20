import Header from "../Header/index";
import Footer from "../Footer/index"

const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <>
      <style jsx>
        {`

        `}
      </style>
        <Header className="page_wrapper" />
        <main className="page_wrapper">{children}</main>
        <Footer className="page_wrapper" />
    </>
  )
}

export default Layout;