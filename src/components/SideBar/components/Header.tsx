import LogomarkAvatar from "./Header/LogomarkAvatar";
import Typography from "./Header/Typography";

export default function Header() {
  return (
    <div className="border-b w-full min-h-14">
      <div className="flex flex-row items-center space-x-3 pb-5 pt-4 px-4">
        <LogomarkAvatar />
        <Typography />
      </div>
    </div>
  );
}
