import type { Route } from "../+types/root";

export default function notFound({ params }: Route.LoaderArgs) {
    const { "*": splat } = params;
    return (
        <>
            <p>Page not found :c</p>
            <p>splat: {splat}</p>
            <img src="../../assets/404cat.jpeg" alt="" />
        </>
    )
}
