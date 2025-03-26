import { Outlet, useNavigate } from "react-router"

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            <header className="bg-amber-300 p-5">
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/')}>Home</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('/dashboard')}>Dashboard</a>
                <a className="p-2 hover:cursor-pointer hover:bg-amber-500" onClick={() => navigate('./user')}>ManageUser</a>
            </header>
            <div>Dashboard</div>
            <Outlet />
        </>
    )
}