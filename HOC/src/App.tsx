import { products, todos } from "./project/data"
import { ProductList } from "./project/ProductList"
import { TodoList } from "./project/TodoList";
import { WithSearch } from "./project/WitchSearch";

const ProductListWithSearch = WithSearch(ProductList, products);
const TodoListWithSearch = WithSearch(TodoList, todos);

function App() {
  return (
    <>
      <h1>HOC</h1>
      <ProductListWithSearch/>
      <TodoListWithSearch/>
    </>
  )
}

export default App