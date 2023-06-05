import { useEffect, useState } from "react";



const useMenu = () => {
    const [ menu, setMenu ] = useState([])
    const [ loading, setLoading ] = useState(true)
    useEffect( () => {
        fetch('https://bistroboss-server-site-ovi-khan.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setLoading(false)
        })
    } ,[])
    return [menu, loading]
} 
export default useMenu;
