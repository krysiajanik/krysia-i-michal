import * as React from "react";

function MenuIcon(props) {
  return (
    <svg height={48} viewBox="0 0 24 24" width={48} fill="#FBFAFA" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>

  );
}

const MemoMenuIcon = React.memo(MenuIcon);
export default MemoMenuIcon;
