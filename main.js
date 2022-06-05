const chart=document.querySelector("#chart").getContext('2d');

//create a new chart instance
 new Chart(chart,{
     type:'line',
     data:{
         labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
         datasets:[
             {
                 label:'BTC',
                 data:[23454,765663,4563473,568768,956984,654373,68364,78755,87656,87654,98789],
                 borderColor:'red',
                 borderWidth:2
             },
             {
                label:'ETH',
                data:[54432,3456734,87654,234676,65432,678970,34234,5464875,31456,79531,3456954],
                borderColor:'blue',
                borderWidth:2
            }
         ]
     },
     option: {
         responsive:true
     }
 })