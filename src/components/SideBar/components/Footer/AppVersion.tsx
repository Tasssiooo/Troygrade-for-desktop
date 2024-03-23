import { getVersion } from "@tauri-apps/api/app";
import { useEffect, useState } from "react";

export default function AppVersion() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    async function version() {
      await getVersion().then((v) => setVersion(v));
    }
    version();
  }, []);

  return (
    <div className="flex justify-center items-center text-foreground-muted border-t w-full text-xs">
      <span>v{version}</span>
    </div>
  );
}
