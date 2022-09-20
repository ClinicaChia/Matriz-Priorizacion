import Head from 'next/head' 
import Image from 'next/image'
import Card from '../components/Card';
import Tabla from '../components/Tabla';
import Total  from '../components/Total';
import { General,clasf, Process } from '../functions/calc';
import Torta from '../components/Torta';
import Barras from '../components/Barras';

const colors1=[
  '#0C72F5',
  '#0C33EB',
  '#0CEBB4',
  '#0CEDF5',
]

const colors2=[
  'Lime',
  '#FFD700',
  '#FF4500',
  'Crimson',
]

//agregar funcion a controller para que se vea mas lindo eporcesamiento de total

const db = require('../data.json');

 function Home({data}) {
  
  data = Process(data);
  
  const total = General(data);
  const data1 = {
    "Hardware": 0,"Redes": 0,"Software": 0,"Mineria de Datos": 0
  }
  const data2 = {
    "bajo": 0,"medio": 0,"alto": 0,"muy alto": 0
  }

  const data3 = {
    "GlPI": 0,"Encuesta": 0,"Solicitud de Reporte": 0,"Reunion": 0,"otra": 0 
  }

  return (
    <div className='container'>
        <h1>Matriz de Identificación de Necesidades</h1>
        <div className='card-container'>
            <Card titulo="Casos Cerrados" valor={ total } clase="card purple" color="#0C72F5">
                <Total valor={ total } color="#0C72F5"/>
            </Card>
        
            <Card titulo="Fuente de informacion" clase="card purple" >
                <Torta datos={data} headers={db.TR} temp={data1} keyw="Tipo de requerimiento" colors={colors1}/>
            </Card>

            <Card titulo="Casos de Priorizacion" clase="card purple" >
                <Torta datos={data} headers={Object.keys(data2)} temp={ data2 } keyw="priorizacion" colors={colors2}/>
            </Card>

            <Card titulo="Fuente de informacion" clase="card purple" >
                <Barras datos={data} headers={Object.keys(data3)} temp={ data3 } keyw="Fuente"/>
            </Card>





        </div>
        <Tabla  data={data}/>
    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await (await fetch( process.env.HOST + '/api/load')).json();
  var data = res.data;
  
  return {
    props : {
      data
    }, // will be passed to the page component as props
  }
}

export default Home;
