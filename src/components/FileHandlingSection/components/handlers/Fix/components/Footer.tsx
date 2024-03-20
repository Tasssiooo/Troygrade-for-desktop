import { DefaultButton } from "@/components/Globals/DefaultButton";
import { Wrench } from "@/components/Globals/Icons";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center pointer-events-auto">
      <DefaultButton className="space-x-2">
        <span className="mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"
            />
          </svg>
        </span>
        Previous
      </DefaultButton>
      <DefaultButton>
        <span className="mr-1">
          <Wrench />
        </span>
        Start converting
      </DefaultButton>
      <DefaultButton className="min-w-[92px]">
        Next
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            aria-hidden
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
            />
          </svg>
        </span>
      </DefaultButton>
    </div>
  );
}
