import Form from "./components/Form";
import Context from "./utils/Context";
import Logo from "./components/Logo";
import PackagingItems from "./components/PackagingItems";
import States from "./components/States";

const App = () => {
  return (
    <Context>
      <div className="app">
        <Logo />
        <Form />
        <PackagingItems />
        <States />
      </div>
    </Context>
  );
};

export default App;
