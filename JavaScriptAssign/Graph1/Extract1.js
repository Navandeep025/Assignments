const readline    = require('readline');
const fs          = require('fs');
var age=[];
var literatePersons=[];
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
    var temp=-1
    //to remove all ages and 0-6
    if(!((lineRecords[5]=='All ages') || (lineRecords[5]=='0-6')))
    {
        
    if(temp!=age.indexOf(lineRecords[5]))
    {
        var k= age.indexOf(lineRecords[5]);
        //console.log(age.indexOf(lineRecords[5]));
        literatePersons[k]=literatePersons[k]+parseFloat(lineRecords[12],10);
        //console.log(literatePersons[k]);
        
    }
    else
    {
        age[c]=lineRecords[5];
        
        literatePersons[c]=0;
        literatePersons[c]=literatePersons[c]+parseFloat(lineRecords[12],10);

        c++;
            
    }
        flag=1;    
    }// end of if header false
    }//end of if or.
    if(flag==1)
    {
        var result=[];
        for(var j=0;j<age.length;j++)
        {

            tempData={};
            tempData["Age-group"]=age[j];
            
            tempData["Literate - Persons"]=literatePersons[j];
            counter=true;
            result.push(tempData);
            //console.log(tempData);
        }
    }
    if(counter)
    {
        
        jsonData=result;

    fs.writeFileSync("graph1.json",JSON.stringify(jsonData),encoding="utf8");
    }// end of counter
    isHeader=false;
    tempData={};
    flag=0;
    counter=false;
});

