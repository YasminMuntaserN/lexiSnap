import React, { createContext, useContext, useState, ReactNode } from "react";

interface Statement {
  _id?: string;
  text: string;
  translation: string;
}

interface Tag {
  id: string;
  name: string;
}

interface Word {
  _id?: string;
  word: string;
  statements: Statement[];
  synonyms: (PartialWord | string)[];
  opposites: (PartialWord | string)[];
  definitions: string[];
  translations: string[];
  tags: (Tag | string)[];
}

type PartialWord = Pick<Word, "word" | "_id">;

interface SearchInfo {
  list: object[]; 
  isLoading: boolean;
  error: string | null;
  isEmpty: boolean;
  isSearch: boolean;
  tagId: string;
}



interface WordContextType {
  word: Word | null;
  WordInfoCleared: boolean;
  updateWord: (newWord: Partial<Word>) => void;
  setWordInfoCleared: (value: boolean) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  isShowMode: boolean;
  SetIsShowMode: (value: boolean) => void;
  prepareWordForSave:()=>Partial<Word>;
    WordsPage: number;
    setWordsPage: React.Dispatch<React.SetStateAction<number>>;
    TagsPage: number;
    setTagsPage: React.Dispatch<React.SetStateAction<number>>;
    WordsTotalPages: number;
    setWordsTotalPages: React.Dispatch<React.SetStateAction<number>>;
    TagsTotalPages: number;
    setTagsTotalPages: React.Dispatch<React.SetStateAction<number>>;
    searchInfo:SearchInfo;
    setSearchInfo:React.Dispatch<React.SetStateAction<SearchInfo>>;
    searchTagId: string;
    setSearchTagId: React.Dispatch<React.SetStateAction<string>>;
}

const WordContext = createContext<WordContextType | undefined>(undefined);

interface WordProviderProps {
  children: ReactNode;
}

export function WordProvider({ children }: WordProviderProps) {
  const [word, setWord] = useState<Word>({
    _id:"",
    word: "",
    statements: [],
    synonyms: [],
    opposites: [],
    definitions: [],
    translations: [],
    tags: [],
  });

  const [WordInfoCleared, setWordInfoCleared] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [sortBy, setSortBy] = useState<string>("word");
  const [isShowMode, SetIsShowMode] = useState<boolean>(false);
  const [WordsPage, setWordsPage] = useState<number>(1);
  const [TagsPage, setTagsPage] = useState<number>(1);
  const [WordsTotalPages, setWordsTotalPages] = useState<number>(1);
  const [TagsTotalPages, setTagsTotalPages] = useState<number>(1);
  const [searchInfo, setSearchInfo] = useState<SearchInfo>({
    list: [],
    isLoading: false,
    error: null,
    isEmpty: true,
    isSearch: false,
    tagId:""
  });
  const [searchTagId, setSearchTagId] = useState<string>("");

  function updateWord(newData: Partial<Word>) {
    if (newData.word === "") {
      setWordInfoCleared(true);
      setWord(() => ({
        _id:"",
        word: "",
        statements: [],
        synonyms: [],
        opposites: [],
        definitions: [],
        translations: [],
        tags: [],
      }));
    } else {
      setWordInfoCleared(false);
      setWord((prev) => ({
        ...prev,
        ...newData,
        statements: [...prev.statements, ...(newData.statements || []).filter(
          (stat) => !prev.statements.some((prevStat) => prevStat.text === stat.text)
        )
      ],
        synonyms: [
          ...prev.synonyms,
          ...(newData.synonyms || []).filter(
            (syn) => !prev.synonyms.includes(syn)
          )
        ],
  
        opposites: [
          ...prev.opposites,
          ...(newData.opposites || []).filter(
            (opp) => !prev.opposites.includes(opp)
          )
        ],
  
        definitions: [
          ...prev.definitions,
          ...(newData.definitions || []).filter(
            (def) => !prev.definitions.includes(def)
          )
        ],
  
        translations: [
          ...prev.translations,
          ...(newData.translations || []).filter(
            (tran) => !prev.translations.includes(tran)
          )
        ],
  
        tags: [
          ...prev.tags,
          ...(newData.tags || []).filter(
            (tag) => !prev.tags.includes(tag)
          )
        ],
      }));
    }
  }
  

  function prepareWordForSave() {
    const wordToSave = { 
      word: word.word,
      statements: word.statements.map(statement => ({
        text: statement.text,
        translation: statement.translation
      })),
      definitions: word.definitions,
      translations: word.translations,
      synonyms : word.synonyms.map(item => {
      if (typeof item === 'string') {
        return item;
      }
      return item._id; 
    }),
  
    opposites : word.opposites.map(item => {
      if (typeof item === 'string') {
        return item;
      }
      return item._id; 
    }),
  
    tags : word.tags.map(item => {
      if (typeof item === 'string') {
        return item;
      }
      return item.id;
    })
  };
  
    return wordToSave;
  }


  return (
    <WordContext.Provider
      value={{
        word,
        updateWord,
        WordInfoCleared,
        setWordInfoCleared,
        sortOrder,
        setSortOrder,
        sortBy,
        setSortBy,
        isShowMode,
        SetIsShowMode,
        prepareWordForSave ,
        WordsPage,
        setWordsPage,
        TagsPage,
        setTagsPage,
        WordsTotalPages, setWordsTotalPages,
        TagsTotalPages, setTagsTotalPages,
        searchInfo, setSearchInfo,
        searchTagId, setSearchTagId
      }}
    >
      {children}
    </WordContext.Provider>
  );
}

export function useWord(): WordContextType {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error("useWord must be used within a WordProvider");
  }
  return context;
}

