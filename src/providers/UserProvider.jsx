import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  //UserContextの中にProviderがあるので、こちらを返却する
  //実際に扱う場合は、定数ではなくsteteを代入しどのコンポーネントから参照、更新ができるように
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
