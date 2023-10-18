import {useState, useEffect} from "react";
import {useQuery} from "@tanstack/react-query";

import {IUser} from "../src/interface";

import {TYPES_ACTIONS, TYPES_BUTTONS} from "./constants";
import {Title, Header, Table, Progress, ButtonPage, WrapperPage, Page404} from "./components";
import {ContainerApp, WrapperButtons, ContainerCurrentPage} from "./styledApp";
import {getUser} from "./service";

function App() {
  const [page, setPage] = useState<number>(1);

  const {isLoading, data, error} = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUser(page),
    keepPreviousData: true,
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  const [sortedData, setSortedData] = useState<IUser[]>([]);

  const [isOrderCounty, setIsORderCountry] = useState<boolean>(false);

  const [isFilesColors, setIsFilesColors] = useState<boolean>(false);

  const [querySearch, setQuerySearch] = useState<string>("");

  useEffect(() => {
    return setSortedData(data?.data?.results);
  }, [data?.data?.results]);

  const handleSort = () => {
    const sorted = [...(sortedData?.length >= 1 ? sortedData : data?.data?.results)];

    sorted.sort((a, b) => {
      const result = !isOrderCounty
        ? a.location.country.localeCompare(b.location.country)
        : b.location.country.localeCompare(a.location.country);

      setIsORderCountry(!isOrderCounty);

      return result;
    });

    setSortedData(sorted);
  };

  const handleDeleteUser = (email: string) => {
    const updatedData = sortedData?.filter((user) => user.email !== email);

    setSortedData(updatedData);
  };

  const reset = () => {
    setSortedData(data?.data?.results);
  };

  const handleClickAction = (value: string) => {
    if (value === TYPES_ACTIONS.TYPE_RESET)
      return reset(), setIsFilesColors(false), setQuerySearch("");

    if (value === TYPES_ACTIONS.TYPE_COUNTRY) return handleSort();

    if (value === TYPES_ACTIONS.TYPE_FILES) return setIsFilesColors(!isFilesColors);
  };

  const handleSearch = (value: string) => {
    const list = [...(sortedData?.length >= 1 ? sortedData : data?.data?.results)];

    const normalizedValue = value.toLowerCase();
    const filteredData = list.filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`.toLowerCase();
      const reversedFullName = `${item.name.last} ${item.name.first}`.toLowerCase();

      const lastNameMatch = item.name.last.toLowerCase().includes(normalizedValue);
      const firstNameMatch = item.name.first.toLowerCase().includes(normalizedValue);

      return (
        fullName.includes(normalizedValue) ||
        reversedFullName.includes(normalizedValue) ||
        lastNameMatch ||
        firstNameMatch
      );
    });

    setSortedData(filteredData);
  };

  const handleChangeSearch = (value: string) => {
    if (value.trim() === "") return setQuerySearch(""), setSortedData(data?.data?.results);

    handleSearch(value);
    setQuerySearch(value);
  };
  const handleClickPage = (value: string) => {
    const lookPage = value === TYPES_BUTTONS.BUTTON_BACK ? page - 1 : page + 1;

    setPage(lookPage);
    setQuerySearch("");
  };

  if (error) return <Page404 />;

  return (
    <ContainerApp>
      {isLoading && <Progress />}
      <Title />
      <ContainerCurrentPage>
        <WrapperPage page={page} />
      </ContainerCurrentPage>
      <Header
        handleChangeSearch={handleChangeSearch}
        handleClickAction={handleClickAction}
        isOrderCounty={isOrderCounty}
        querySearch={querySearch}
      />

      <Table
        dataUser={sortedData}
        handleDeleteUser={handleDeleteUser}
        handleSort={handleSort}
        isFilesColors={isFilesColors}
      />

      {sortedData?.length >= 1 && (
        <WrapperButtons>
          <ButtonPage
            handleClick={handleClickPage}
            isDisabled={page <= 1}
            value={TYPES_BUTTONS.BUTTON_BACK}
          />
          <ButtonPage handleClick={handleClickPage} value={TYPES_BUTTONS.BUTTON_NEXT} />
        </WrapperButtons>
      )}
    </ContainerApp>
  );
}

export default App;
