import * as Avatar from '@radix-ui/react-avatar';

import logomark from "@/assets/images/troygrade-icon.png";

export default function LogomarkAvatar() {
  return (
    <>
      <Avatar.Root className="inline-flex justify-center items-center align-middle overflow-hidden">
        <span className="absolute bg-center bg-contain bg-no-repeat size-16 bg-[url(@/assets/images/social_panel_level_ring.png)]"></span>
        <Avatar.Image
          className="size-11 object-cover rounded-full"
          src={logomark}
          alt="Troygrade logomark"
        />
      </Avatar.Root>
    </>
  );
}
