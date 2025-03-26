import { useNavigate } from "react-router"

export default function Marketing() {
    const navigate = useNavigate()
    return (
        <>
            <header className="bg-green-950 text-white p-3">
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/')}>Home</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/marketing')}>Dashboard</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('details')}>Details</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('contacts')}>Contacts</a>
            </header>
            <h1>Marketing</h1>
        </>
    )
}