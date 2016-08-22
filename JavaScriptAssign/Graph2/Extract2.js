const readline    = require('readline');
const fs          = require('fs');
var male=[];
var female=[];
var states=[];
var graduatesmale=[];
var graduatesfemale=[];
var c=0;
var flag=0;
var tempData={};
var jsonData=[];
var header=[];
var isHeader=true;
var counter=false;
const rl          = readline.createInterface({
    input: fs.createReadStream('India2011.csv')
});
rl.on('line',function(line)
{
    var lineRecords  = line.trim().split(',');
    
    for(var i=0;i<lineRecords.length;i++)
    {
        if(isHeader)
        {       
            header[i]=lineRecords[i];
        }
    }

    if(isHeader==false)
    {
    var temp=-1;    
    if(temp!=states.indexOf(lineRecords[3]))
    {
        var k= states.indexOf(lineRecords[3]);
        //console.log(age.indexOf(lineRecords[5]));
        graduatesmale[k]=graduatesmale[k]+parseFloat(lineRecords[40],10);
        graduatesfemale[k]=graduatesfemale[k]+parseFloat(lineRecords[41],10);
        //console.log(literatePersons[k]);
        
    }
    else
    {
        states[c]=lineRecords[3];
        
        graduatesmale[c]=0;
        graduatesfemale[c]=0;
        graduatesmale[c]=graduatesmale[c]+parseFloat(lineRecords[40],10);
        graduatesfemale[c]=graduatesfemale[c]+parseFloat(lineRecords[41],10);

        c++;
            
    }
        flag=1;    
    }// end of if header false
    
    if(flag==1)
    {
        var result=[];
        for(var j=0;j<states.length;j++)
        {

            tempData={};
            tempData["states"]=states[j];
            
            tempData["Graduate Males"]=graduatesmale[j];
            tempData["Graduate Females"]=graduatesfemale[j];
            counter=true;
            result.push(tempData);
            //console.log(tempData);
        }
    }
    if(counter)
    {
        
        jsonData=result;
    fs.writeFileSync("graph2.json",JSON.stringify(jsonData),encoding="utf8");
    }// end of counter
    isHeader=false;
    tempData={};
    flag=0;
    counter=false;
});
