import { useState, useEffect } from 'react'
import CustomizedAccordions from './Accordion'
import CardLayers3d from './Card'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.github.com/users/wdpedroborges/repos');
        let newData = await response.json();
        newData = newData.map((item: any) => {
          return {
            name: item.name,
            description: item.description,
            html_url: item.html_url
          }
        })

        setData(newData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Info My Git</h1>
      <p style={{color: "#fff", textAlign: "center"}}>This app consumes Github API to enlist all my repositories.</p>
      <div className="cards">
        <CardLayers3d card={"Front-end"} cardCover={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"} cardContent={"React.js"}/>
        <CardLayers3d card={"Front-end & Back-end"} cardCover={"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"} cardContent={"Typescript"}/>
        <CardLayers3d card={"Back-end"} cardCover={"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg"} cardContent={"Node.js"}/>
      </div>
      <CustomizedAccordions data={data}/>
    </>
  )
}
export default App;
