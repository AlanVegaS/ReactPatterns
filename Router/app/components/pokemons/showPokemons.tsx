import type { Route } from "../+types/layout";

export async function clientLoader({ params }: Route.LoaderArgs) {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    await new Promise(resolve => setTimeout(resolve, 1000));

    return data;
}

export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function ShowPokemons({
    loaderData,
}: Route.ComponentProps) {

    const { count, results: pokemonsList } = (loaderData as any)
    //console.log(result);

    return (
        <>
            <div>Total pokemons {count}</div>
            {
                pokemonsList.map((pokemon: { name: string }) => (
                    <p key={pokemon.name}>{pokemon.name}</p>
                ))
            }
        </>
    )
}