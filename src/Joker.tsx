import { useQuery } from "@tanstack/react-query";

import Header from "./components/Header";
import Button, { Variants } from "./components/Button";
import Joke from "./components/Joke";

import { fetchJoke } from "./api";
import locale from "./locale";

function Joker() {
  const { error_loading_joke, loading_text, view_api_docs, refetch_button } =
    locale;
  const { isLoading, isRefetching, isError, data, refetch } = useQuery(
    ["joke"],
    fetchJoke
  );
  const loadingJoke = isLoading || isRefetching;
  const fetchError =
    !loadingJoke && (isError || !data?.punchline || !data?.setup);

  return (
    <div className="flex justify-center">
      <div className="pt-24 w-5/6">
        <Header>
          <Button
            onClick={refetch}
            color={Variants.blue}
            label={refetch_button}
          />
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 py-10"
            href="https://github.com/15Dkatz/official_joke_api"
          >
            {view_api_docs}
          </a>
        </Header>
        <div className="pb-20">
          {loadingJoke && (
            <div className="uppercase text-grey-100 font-bold">
              {loading_text}
            </div>
          )}
          {fetchError && (
            <div className="uppercase text-rose-600 font-bold">
              {error_loading_joke}
            </div>
          )}
          {!loadingJoke && !fetchError && (
            <Joke setup={data.setup} punchline={data.punchline} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Joker;
