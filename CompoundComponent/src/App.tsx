import { Menu } from "./components/Menu"

function App() {

  return (
    <>
      <h2>Compound Component</h2>
      <Menu>
        <Menu.Item title="Element1" />
        <Menu.Item title="Element2" />
        <Menu.Item title="Element3" />
      </Menu>
    </>
  )
}

export default App