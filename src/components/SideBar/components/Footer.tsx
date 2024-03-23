import LinkButtons from "./Footer/LinkButtons";
import AppVersion from "./Footer/AppVersion";
import About from "./Footer/About";

export default function Footer() {
  return (
    <div className="flex flex-row w-full h-8">
      <LinkButtons />
      <AppVersion />
      <About />
    </div>
  );
}
