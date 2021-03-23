import Nav from "./Global_Nav"
import Header from "./Global_Header"
import { motion } from "framer-motion"



const Layout = ({children}) => {
    return (
        <motion.div 
        initial="hide" 
        animate="show"
        >
        <Nav />
        <Header />
        {children}
        </motion.div>
    )
}

export default Layout
