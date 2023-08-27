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
    [{ value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }],
  ]);
  let col = ["Req no","Wip Line id","Product","Collection","TOC Order","Department"]

  return (
    <>
      <Spreadsheet data={data} 
      onChange={(d)=>{
        const t = d
        for (let i = 0; i < 6; i++) {
          const string = d[i][2]
          console.log("str is ",string) 
          if(string.value[0] === '1'){
            t[i][5] = {value:"SS",readOnly:true}
          }
          else if(string.value[0] === "2"){
            t[i][5] = {value:"CASTING",readOnly:true}
          }
          else if(string.value[0] === "3"){
            t[i][5] = {value:"JUNA",readOnly:true}
          }
          else if(string.value[0] === "4"){
            t[i][5] = {value:"GHAT",readOnly:true}
          }
          else {
            t[i][5] = {value:"",readOnly:true}
          }
          setData(t)
        }
      }} columnLabels={col} />
      <p>Just an implementation of requirement</p>
      <p>Implementing String logic in sheets (this is just and exapmle):
        <li>1st char of Product is 1 then Department is SS</li>
        <li>1st char of Product is 2 then Department is CASTING</li>
        <li>1st char of Product is 3 then Department is JUNA</li>
        <li>1st char of Product is 4 then Department is GHAT</li>
      </p>
    </>
  )  
};

export default App
