import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    route("/*", "./components/notFound.tsx"),
    layout("./components/layout.tsx", [
        index("routes/home.tsx"),
        route("team/:teamID", "components/NameTeam.tsx"),
    ]),
    route("dashboard", "./components/dashboard/dashboard.tsx", [
        index("./components/dashboard/settings.tsx"),
        route("user", "./components/dashboard/manageUser.tsx")
    ]),
    ...prefix("marketing", [
        index("./components/marketing/marketing.tsx"),
        route("details", "./components/marketing/details.tsx"),
        route("contacts", "./components/marketing/contacts.tsx")
    ]),
    route("/pokemons", "./components/pokemons/showPokemons.tsx"),
] satisfies RouteConfig;