var arrayn = [2,5,3,3,1,9,2,5,1,10];
var aux = 0; 
for(i = 0; i<arrayn.length; i++)
{
    for(j = 0; j<arrayn.length; j++)
    {
        if(arrayn[j] > arrayn[j+1])
        {
            aux = arrayn[j];
            arrayn[j] = arrayn[j+1];
            arrayn[j+1] = aux;
        }
    }
}
console.log(arrayn);
