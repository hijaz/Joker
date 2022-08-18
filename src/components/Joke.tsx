import { useState } from "react";
import Button, { Variants } from "./Button";
import locale from "../locale";

type Props = {
  setup: string;
  punchline: string;
};

function Joke({ setup, punchline }: Props) {
  const [displayPunchLine, setDisplayPunchLine] = useState(false);
  const { hide_punchline, show_punchline } = locale;

  const togglePunchLine = () =>
    setDisplayPunchLine((displayState) => !displayState);

  return (
    <div className="flex flex-col">
      <div className="font-semibold text-2xl p-10 before:content-['“'] before:text-[200px] before:text-slate-200 before:relative before:top-[100px]">
        <span className="relative right-[50px]">{setup}</span>
      </div>
      <Button
        color={Variants.green}
        label={displayPunchLine ? hide_punchline : show_punchline}
        onClick={togglePunchLine}
        className={"self-center"}
      />
      {displayPunchLine && (
        <div
          className={
            "self-end font-semibold text-2xl p-10 after:content-['”'] after:text-[200px] after:text-slate-200 after:relative after:top-[125px]"
          }
        >
          <span className="relative left-[50px] z-10">{punchline}</span>
        </div>
      )}
    </div>
  );
}

export default Joke;
