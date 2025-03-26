import { useNavigate } from "react-router"

export default function Details() {
  const navigate = useNavigate()
    return (
        <>
            <header className="bg-violet-700 text-white p-10">
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/')}>Home</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/marketing')}>Dashboard</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/marketing/details')}>Details</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/marketing/contacts')}>Contacts</a>
            </header>
            <h1>Details</h1>
        </>
    )
}