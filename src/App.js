import Buttons from "./components/Buttons";
import SearchInputForm from "./components/SearchInputForm";
import StoriesCards from "./components/StoriesCards";
import "./styles.css";

export default function App() {
  return (
    <>
      <SearchInputForm />
      <Buttons />
      <StoriesCards />
    </>
  );
}
