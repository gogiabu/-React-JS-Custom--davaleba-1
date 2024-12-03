
import React from "react";
import ReactDOM from 'react-dom/client';



function App() {
  function useJami() {
    window.alert( 5 + 6 );

  }
  return(
    <React.Fragment>
      <button onClick={useJami}>ჯამი</button>
    </React.Fragment>
  )


}


var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);

