import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  console.log("call app");
  return (
    <div>
      <PageTitle title={"This is App Component"} />
      <PageTitle title={"My Friends"} />
      Article 1
      <Rating value={2} />
      <Accordion title={"Menu 1"} collapsed={true}/>
      <Accordion title={"Menu 2"} collapsed={false}/>
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Rating value={4} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
}

function PageTitle(props: PageTitlePropsType) {
  console.log("call page title");
  return <h1>{props.title}</h1>;
}

export default App;
