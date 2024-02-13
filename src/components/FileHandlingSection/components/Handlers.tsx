import DefaultButton from "@/components/Globals/DefaultButton";

import { useAppDispatch } from "@/redux/hooks";

import { codeWindow } from "@/redux/reducers/handleSlice";

export default function Handlers() {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-[65px] px-4 pt-3.5">
      <div className="flex flex-row justify-end space-x-2.5 w-full">
        <DefaultButton tooltip="Delete" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </DefaultButton>
        <DefaultButton tooltip="Download" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 5v6h1.17L12 13.17L9.83 11H11V5zm2-2H9v6H5l7 7l7-7h-4zm4 15H5v2h14z"/></svg>
        </DefaultButton>
        <DefaultButton tooltip="Convert" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.469 4.469 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>
        </DefaultButton>
        <DefaultButton tooltip="Save" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6z"/></svg>
        </DefaultButton>
        <DefaultButton tooltip="Open in a new window" size="icon" onClick={() => dispatch(codeWindow())} >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/></svg>
        </DefaultButton>
      </div>
    </div>
  );
}
