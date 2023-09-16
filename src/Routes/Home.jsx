import Card from '../Components/Card'
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const Home = () => {
    
    const { apiState } = useContext(ContextGlobal);

    return (
      <main className="home" >
      <h1>Dentistas disponibles</h1>
      <div className='card-grid'>
        {apiState.map((value) => (
        <Card key={value.id} name={value.name} username={value.username} id={value.id} showButton={true} />
         )
        )}
      </div>
    </main>
  )
}


export default Home;