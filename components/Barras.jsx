import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barra = ({datos,headers,temp,keyw}) => {


  datos.forEach(element => {
    temp[element[keyw]] += 1;
  })

  temp = headers.map((tr)=>{return temp[tr]})


  const data = {
    labels: headers,
    datasets: [
      {
        label: '',
        data: temp,
        backgroundColor: [
          '#0C72F5',
          '#0C33EB',
          '#0CEBB4',
          '#0CEDF5',
          
          
        ]
      },
    ],
  };

  return( 
      <div style={{height:'200px',width:'100%'}}>
        <Bar data={data} options={{maintainAspectRatio: false}} />;
      </div>
)
  
}

export default Barra;
