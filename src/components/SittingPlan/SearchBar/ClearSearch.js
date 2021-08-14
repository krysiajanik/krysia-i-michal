import * as React from "react";

function ClearSearch(props) {
  return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="#013A1E"
        onClick={props.onClick}
        {...props}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
  );
}

const MemoClearSearch = React.memo(ClearSearch);
export default MemoClearSearch;
