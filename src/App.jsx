import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spreadsheet from "react-spreadsheet";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

const App = () => {
  const [data, setData] = useState([
    [{ value: "aaa" }, { value: "ccc" }],
    [{ value: "bbb" }, { value: "ddd" }],
  ]);
  let col = ["Req no","Wip Line id","Product","Collection","TOC Order","Department"]

  return <Spreadsheet data={data} 
  onChange={(d)=>{
    const t = d
    const string = d[0][2]
    console.log("str is ",string)
    
    if(string === '1'){
      t[0][5] = "SS"
    }
    else if(string === "2"){
      t[0][5] = "CASTING"
    }
    else if(string === "3"){
      t[0][5] = "JUNA"
    }
    else if(string === "4"){
      t[0][5] = "GHAT"
    }
    else {
      t[0][5] = "none"
    }
    setData(t)
  }} 
  columnLabels={col}/>;
};

export default App
