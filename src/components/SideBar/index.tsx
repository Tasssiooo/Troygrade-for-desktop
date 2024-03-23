import Header from "./components/Header";
import Actions from "./components/Actions";
import Filter from "./components/Filter";
import FileList from "./components/FileList";
import Footer from "./components/Footer";

export default function SideBar() {
  return (
    <section className="relative z-50 w-52 h-screen bg-background *:cursor-pointer *:select-none">
      <div className="flex flex-col h-full w-full">
        <Header />
        <Actions />
        <Filter />
        <FileList />
        <Footer />
      </div>
    </section>
  );
}
