import { Button, Tag } from "@arco-design/web-react";
import { IconSearch } from "@arco-design/web-react/icon";
import { useSearchParams, useNavigate } from "react-router-dom";

const SearchFilter = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <>
      {searchParams.get("q") && (
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded p-1">
          <IconSearch className="m-1" />
          <div className="flex-1">
            <Tag
              closable
              onClose={() => {
                console.log("remove");
              }}
              className="m-1 bg-white"
            >
              Keyword
            </Tag>
            <Tag
              closable
              onClose={() => {
                console.log("remove");
              }}
              className="m-1 bg-white"
            >
              A member
            </Tag>
          </div>
          <Button
            size="mini"
            onClick={() => {
              navigate({
                pathname: "/tasks",
                search: "",
              });
            }}
          >
            Clear
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchFilter;
