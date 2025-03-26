import { Outlet, useNavigate } from "react-router"

export default function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-blue-500 text-amber-50 p-3">
                <a className="p-3 hover:bg-blue-900 hover:cursor-pointer" onClick={() => navigate("./")}>Home</a>
                </div>
            <Outlet />
        </>
    )
}