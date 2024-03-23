import { DefaultButton } from "@/components/Globals/DefaultButton";
import { Wrench } from "@/components/Globals/Icons";
import { handleConvertFiles } from "@/lib/handlers";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { continueModal, selectedFiles } from "@/redux/reducers/appSlice";

import { Settings } from "@/types/types";

interface Props {
  ids: string[];
  settings: Settings[];
  isForAll: boolean;
  index: {
    index: number;
    setIndex: (i: any) => void;
  };
}

export default function Footer({ ids, settings, isForAll, index }: Props) {
  const files = useAppSelector((state) => state.app.files);
  const continueConfig = useAppSelector((state) => state.app.continueModal);

  const dispatch = useAppDispatch();

  function handleStartConverting() {
    if (isForAll) {
      const unchanged = settings.slice(0, index.index);
      const from = Array.from({
        length: settings.length - index.index,
      }).map(() => settings[index.index]);

      const newSettings = [...unchanged, ...from];

      handleConvertFiles(files, ids, newSettings);
    } else {
      handleConvertFiles(files, ids, settings);
    }

    dispatch(continueModal({ ...continueConfig, show: false }));
    dispatch(selectedFiles([]));
    index.setIndex(0);
  }

  return (
    <div className="flex flex-row justify-between items-center pointer-events-auto">
      <DefaultButton
        className="space-x-2"
        disabled={isForAll}
        onClick={() =>
          index.setIndex((prev: number) => (prev > 0 ? prev - 1 : prev))
        }
      >
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
      <DefaultButton onClick={handleStartConverting}>
        <span className="mr-1">
          <Wrench />
        </span>
        Start converting
      </DefaultButton>
      <DefaultButton
        className="min-w-[92px]"
        disabled={isForAll}
        onClick={() =>
          index.setIndex((prev: number) =>
            prev < ids.length - 1 ? prev + 1 : prev
          )
        }
      >
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
