import { TodoView } from "./components/TodoView"
import { Store } from "./store"

function App() {
  return (
    <>
      <h2>Proovider</h2>
      <Store>
        <TodoView />
      </Store>
    </>
  )
}

export default App