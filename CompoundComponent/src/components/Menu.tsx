import { ChildrenProps } from "../interfaces/interfaces"
import { Provider, useTodoContext } from "./Provider"

export const Menu = ({ children }: ChildrenProps) => {
    return (
        <Provider>
            <MenuContainer>
                {children}
            </MenuContainer>
        </Provider>
    )
}

const MenuContainer = ({ children }: ChildrenProps) => {
    const { showSelected } = useTodoContext()

    return (
        <>
            <div>{showSelected()}</div>
            <ul>{children}</ul>
        </>
    )
}

type PropsMenuItem = {
    title: string
}

const MenuItem = ({ title }: PropsMenuItem) => {
    const { onSelect } = useTodoContext()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        onSelect(title)
    }

    return (
        <>
            <li>
                <a href="#" onClick={handleClick}>
                    {title}
                </a>
            </li >
        </>
    )
}

Menu.Item = MenuItem