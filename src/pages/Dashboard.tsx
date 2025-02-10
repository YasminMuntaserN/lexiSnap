import StarterSection from "../ui/StarterSection";
import Page from "../ui/Page";
import { Loader } from "../ui/Loader";
import AllWords from "../components/Word/AllWords";
import { useWordList } from "../components/Word/hooks/useWordList";
import { useWord } from "../context/WordContext";

function Dashboard() {
    const { wordList, isLoading, error  } = useWordList();
    const {searchInfo}=useWord();

    if (error) return <p>Something went wrong: {error.message}</p>;

return (
    <Page>
    {isLoading && <Loader />}

    {(searchInfo?.isEmpty && searchInfo?.isSearch )?
        (
        <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>
        No words found.
        </p>
    ):
    (wordList?.length > 0 && <AllWords words={wordList} />)
    }

    {!wordList?.length && <StarterSection />}
    </Page>
);
}

export default Dashboard;
