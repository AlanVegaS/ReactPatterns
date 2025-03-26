import type { Route } from "../+types/root";

export async function clientLoader({ params }: Route.LoaderArgs) {
    return { message: `Hello, world! -loader- ${params.teamID}` };
}

export default function NameTeam({
    loaderData,
}: Route.ComponentProps) {
    return (
        <h1>Team:{` ${loaderData.message}`}</h1>
    )
}