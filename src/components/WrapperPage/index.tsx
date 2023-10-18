interface PropsPage {
  page: number;
}

const WrapperPage: React.FC<PropsPage> = ({page}) => {
  return <p>{`Page ${page}`} </p>;
};

export default WrapperPage;
