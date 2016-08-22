const readline    = require('readline');
const fs          = require('fs');
var educategory=[];
var edu=0;
var type=[];
/*var edumale=[];
var edufemale=[];*/
var c=0;
var flag=0;
var tempData1={};
var tempData2={};
var    tempData3={};
var tempData4={};
var tempData5={};
var    tempData6={};
var    tempData7={};
var    tempData8={};
var    tempData9={};
var    tempData10={};
var jsonData=[];
var header=[];
var isHeader=true;
var counter=false;

for(var c=0;c<10;c++)
{
    educategory[c]=0;

}
type[0]="Educational level - Literate without educational level - Persons";
type[1]="Educational level - Below Primary - Persons";
type[2]="Educational level - Primary - Persons";
type[3]="Educational level -  Middle- Persons";
type[4]="Educational level -  Matric/Secondary- Persons";
type[5]="Educational level -  Higher secondary/Intermediate/Pre-University/Senior secondary  - Persons";
type[6]="Educational level -   Non-technical diploma or certificate not equal to degree  - Persons";
type[7]="Educational level -  Technical diploma or certificate not equal to degree - Persons";
type[8]="Educational level -  Graduate & above - Persons";
type[9]="Educational level -  Unclassified - Persons";

const rl = readline.createInterface({
    input: fs.createReadStream('India2011.csv')
});
rl.on('line',function(line)
{
    var j=15;
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
    
    
    for(var z=0;z<10;z++)
    {
        educategory[z]=educategory[z]+parseFloat(lineRecords[j]);
        j=j+3;
        flag=1;
    }    

    }//end isheader
        if(flag==1)
        {
        var result=[];


            tempData1={};
            tempData2={};
            tempData3={};
            tempData4={};
            tempData5={};
            tempData6={};
            tempData7={};
            tempData8={};
            tempData9={};
            tempData10={};
            
            tempData1["type"]=type[0];
            tempData2["type"]=type[1];
            tempData3["type"]=type[2];
            tempData4["type"]=type[3];
            tempData5["type"]=type[4];
            tempData6["type"]=type[5];
            tempData7["type"]=type[6];
            tempData8["type"]=type[7];
            tempData9["type"]=type[8];
            tempData10["type"]=type[9];
            tempData1["Value"]=educategory[0];
            tempData2["Value"]=educategory[1];
            tempData3["Value"]=educategory[2];
            tempData4["Value"]=educategory[3];
            tempData5["Value"]=educategory[4];
            tempData6["Value"]=educategory[5];
            tempData7["Value"]=educategory[6];
            tempData8["Value"]=educategory[7];
            tempData9["Value"]=educategory[8];
            tempData10["Value"]=educategory[9];

            counter=true;
            result.push(tempData1);
            result.push(tempData2);
            result.push(tempData3);
            result.push(tempData4);
            result.push(tempData5);
            result.push(tempData6);
            result.push(tempData7);
            result.push(tempData8);
            result.push(tempData9);
            result.push(tempData10);
            
        
        }//end flag
    if(counter)
    {
        
        jsonData=result;
    fs.writeFileSync("graph3.json",JSON.stringify(jsonData),encoding="utf8");
    }// end of counter
    isHeader=false;
    tempData1={};
            tempData2={};
            tempData3={};
            tempData4={};
            tempData5={};
            tempData6={};
            tempData7={};
            tempData8={};
            tempData9={};
            tempData10={};
    flag=0;
    counter=false;
});

