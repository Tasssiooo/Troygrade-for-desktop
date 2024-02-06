import Header from "./components/Header";

export default function SideBar() {
  return (
    <section className="relative z-50 w-52 min-h-screen bg-background">
      <div className="flex flex-col h-full w-full">
        <Header />
      </div>
    </section>
  );
}
