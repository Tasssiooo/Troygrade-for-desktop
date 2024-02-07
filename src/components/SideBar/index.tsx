import Actions from "./components/Actions";
import FileList from "./components/FileList";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function SideBar() {
  return (
    <section className="relative z-50 w-52 h-screen bg-background">
      <div className="flex flex-col h-full w-full">
        <Header />
        <Actions />
        <FileList />
        <Footer />
      </div>
    </section>
  );
}
