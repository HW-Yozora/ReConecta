import {impacto} from "./dados.js";

let graficoAtual=null;

export function initGrafico(){

  const canvas=
    document.getElementById("impact-chart");

  if(
    !canvas ||
    !window.Chart
  ){
    return;
  }

  if(graficoAtual){
    graficoAtual.destroy();
  }

  graficoAtual=
    new window.Chart(
      canvas,
      {
        type:"bar",

        data:{
          labels:
            impacto.map(i=>i.label),

          datasets:[
            {
              label:"Indicadores da ReConecta",

              data:
                impacto.map(i=>i.valor),

              backgroundColor:[
                "#4f8a4c",
                "#d6a72c",
                "#d97732"
              ],

              borderWidth:1
            }
          ]
        },

        options:{
          responsive:true,
          maintainAspectRatio:false,

          plugins:{
            legend:{
              display:true
            }
          },

          scales:{
            y:{
              beginAtZero:true
            }
          }
        }
      }
    );
}