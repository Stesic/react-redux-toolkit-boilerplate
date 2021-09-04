import React from "react";
import { Provider, useSelector } from "react-redux";
import ToastWrap from "ToastWrap";
import RouterWrap from "./RouterWrap";

// import MainTheme from "./theme";

import { store } from "./store/configureStore";

const App = () => {
  return (
    <div className="App">
      <Provider store={store()}>
        {/* <MainTheme> */}
        <ToastWrap>
          <RouterWrap />
        </ToastWrap>
        {/* </MainTheme> */}
      </Provider>
    </div>
  );
};

export default App;
