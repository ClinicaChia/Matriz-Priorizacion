import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Torta = ({datos,headers,temp,keyw,colors}) => {


  datos.forEach(element => {
    temp[element[keyw]] += 1;
  })

  temp = headers.map((tr)=>{return temp[tr]})


  const data = {
    labels: headers,
    datasets: [
      {
        label: '# of Votes',
        data: temp,
        backgroundColor: colors,
        borderColor: [
          'aliceblue',
        ],
        borderWidth: 1,
      },
    ],
  };

  return( 
      <div style={{height:'200px',width:'100%'}}>
        <Pie data={data} options={{maintainAspectRatio: false}} />;
      </div>
)
  
}

export default Torta;
