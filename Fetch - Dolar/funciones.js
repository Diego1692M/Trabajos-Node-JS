function listarDatos(){
    let resultado = ''
    fetch('https://www.datos.gov.co/resource/ceyp-9c7c.json')
    .then(response => response.json())
    .then(data => 
        {
            for(let i of data){
                resultado = resultado + '<tr><td>'+i.valor+'</td>'+
                '<td>'+i.vigenciadesde+'</td>'+ '<td>'+i.vigenciahasta+'</td>'+
                '</tr>';
        }
        document.getElementById('contenido').innerHTML = resultado
    })
};