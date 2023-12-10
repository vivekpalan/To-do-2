const addbtn=document.getElementById('addbtn');
const listContainer=document.getElementById('listcontainer');
const body=document.body
const ulist=document.querySelector('ul');

// ulist.forEach((e,i)=>{
//     console.log('This is using the for each array method:'+ e +'Its index is:'+i)
// })


console.log(body,listContainer,ulist)

addbtn.addEventListener('click',add)

function add(){

    const dialogue=document.createElement('div');
    dialogue.style.width='400px';
    dialogue.style.height='300px';
    dialogue.style.backgroundColor='white';
    dialogue.style.position='absolute';
    dialogue.style.boxShadow='5px 5px 10px gray';
    dialogue.style.borderRadius='20px';
    dialogue.style.transition='2s all';
    dialogue.style.position='absolute';
    dialogue.style.padding='15px';

    const heading=document.createElement('h3');
    heading.innerHTML='Enter your tasks:';
    dialogue.appendChild(heading);
    heading.style.marginTop='25px';


    const input=document.createElement('input');
    input.style.position='relative';
    input.style.top='15px';
    input.style.outline='none';
    input.style.borderRadius='5px';
    input.innerHTML='Enter your tasks';
    input.classList.add('inputclass')

    
    dialogue.appendChild(input)

    input.addEventListener('keypress',inputPress);

    function inputPress(){

        let value=input.value;
        let len=value.length;

        
    
        
        
        // console.log(len)
        
            // const spanText=document.createElement('span');
            // if(len<=19){
            //     spanText.innerHTML='Atleat 5-10 characters'
            //     spanText.style.color='00ff00';
            // }
            // else{
            //     spanText.innerHTML='Sorry no more than 20 characters!'
            //     spanText.style.color='#ff0000'
            // }
            // dialogue.appendChild(spanText);
            // spanText.style.position='absolute';
            // spanText.style.top='130px';
            // spanText.style.left='20px';

            if(len>=19){
                characterLim();
                alert('NO MORE THAN 20 WORDS');
            }
            

      
        function validLim(){
            const validTask=document.createElement('span');
            validTask.innerHTML='Atleast 10-15 characters';
            dialogue.appendChild(validTask);
            validTask.style.color='#00ff00';
            validTask.style.position='absolute';
            validTask.style.top='130px';
            validTask.style.left='20px';
        }
        
        
        function characterLim(){
            const Text=document.createElement('span');
            Text.innerHTML='Sorry no more than 20 characters!'
            dialogue.appendChild(Text);
            Text.style.position='absolute';
            Text.style.top='130px';
            Text.style.left='20px';
            Text.style.color='#ff0000';
        }
        

  
       
        // if(e.length<){
        //     console.log('valid input')
        // }
        // else{
        //     console.log('Sorry the text should be less then 20 characters')
        // }

        // console.log(input.length)
    }
    body.appendChild(dialogue);

    const cancelBtn=document.createElement('button');
    cancelBtn.innerHTML='Cancel';
    dialogue.appendChild(cancelBtn);
    cancelBtn.style.position='absolute';
    cancelBtn.style.bottom='20px';
    cancelBtn.style.left='20px';
    cancelBtn.style.width='100px';
    cancelBtn.style.height='42px';
    cancelBtn.style.backgroundColor='#ff0000';
    cancelBtn.style.color='white';
    cancelBtn.style.borderRadius='5px';
    cancelBtn.style.border='none';
    cancelBtn.style.paddingInline='25px'

    cancelBtn.addEventListener('click',btnCancel);

    function btnCancel(){
        cancelBtn.parentElement.remove()
    }

    const dbtn=document.createElement('button');
    dbtn.innerHTML='Add'; 
    dbtn.style.position='absolute';
    dbtn.style.bottom='20px';
    dbtn.style.right='20px';
    dbtn.style.borderRadius='5px';
    dbtn.style.border='none';
    dbtn.style.color='white';
    dbtn.style.backgroundColor='limegreen';
    dbtn.style.width='100px';
    dbtn.style.height='42px';

    dbtn.addEventListener('click',dbtnAdd);  
    dialogue.appendChild(dbtn);


    function dbtnAdd(){
        if(input.value===''){
            alert('Please input your task!')
        }
        else{
            let listEle=document.createElement('li');
            listEle.innerHTML=input.value;
            ulist.appendChild(listEle);

            listEle.classList.add('list-value');
            console.log(listEle)

            const cross=document.createElement('span');
            cross.innerHTML='\u00d7';
            listEle.appendChild(cross);

            
            cross.addEventListener('click',crossDel);

            function crossDel(){
                cross.parentElement.remove();
            }
        }
        input.value='';
        

    }

}



listContainer.addEventListener('click',listFunction);

function listFunction(e){
    if(e.target.tagName==='LI'){
        let checkClass=e.target
        checkClass.classList.toggle('checked');
        console.log(e)
    }
}



// Tracking Habits button


const track=document.querySelector('.habit-btn');
        console.log(track)

        track.addEventListener('click',trackHabits);

        function trackHabits(){
            const toDo=document.querySelector('.todo');
            const trackedEle=document.createElement('div');
            toDo.appendChild(trackedEle)
        
            trackedEle.style.width='600px'
            trackedEle.style.minHeight='500px'
            trackedEle.style.position='absolute';
            trackedEle.style.top='10%';
            trackedEle.style.left='-30%';
            trackedEle.style.padding='15px';
            trackedEle.style.backgroundColor='white'
            trackedEle.style.borderRadius='10px';
        
            const inputTrack=document.createElement('div');
            inputTrack.innerHTML='Tasks completed:'
            trackedEle.appendChild(inputTrack);
            // inputTrack.style.display='flex';
            // inputTrack.style.flexDirection='column';
            
            // inputTrack.style.width='100%'
            // inputTrack.style.border='2px solid blue'
            // inputTrack.style.height='40px';

            
            // function concatenate(name,sub){
            //     var val;
            //     val=name+sub;
            //     return val;
            // }
            // function DisplayFunction(){
            //     var result;
            //     result=concatenate('Amit','Java');
            //     document.write(result);
            // }
            
           
                // const listArrayElement=[]
                // listArrayElement.push(10)
                // console.log(listArrayElement)


            const listValElement=function(input) {
                const listValue=document.getElementsByClassName('list-value');
                const listVal1=input.value
                return listVal1

            }


            for(var i=0;i<=6;i++){             
                const trackedList=document.createElement('li');
                // const element=listValElement()
                // console.log(element)
                const taskHtml={first:'Meditation',second:'Reading',third:'Waking early',fourth:'Youtube'}
                
                if(i==1){
                    function taskArray(){
                        trackedList.innerText=taskHtml.first
                        trackedEle.appendChild(trackedList);
                        checkBoxes()
                    }
                    taskArray()
                }
                else if(i==2){
                    trackedList.innerHTML=taskHtml.second
                    trackedEle.appendChild(trackedList)
                    checkBoxes()
                }
                else if(i==3){
                    trackedList.innerHTML=taskHtml.third
                    trackedEle.appendChild(trackedList)
                    checkBoxes()
                }
                else if(i==4){
                    trackedList.innerHTML=taskHtml.fourth
                    trackedEle.appendChild(trackedList)
                    checkBoxes()
                }
                // trackedList.innerHTML='Meditation';
                trackedList.style.listStyleType='none';
                trackedList.style.marginBlock='20px';
                trackedList.style.marginLeft='20px';
                trackedList.style.fontWeight='bold';
                // trackedList.style.display='flex'
                // trackedList.style.flexDirection='column'

                
                
            }

            // const week1=document.createElement('span')
            //     week1.innerHTML='Week 1';
            //     trackedEle.appendChild(week1);
            //     week1.style.display='block'
            //     week1.style.marginBlock='20px'
            // const week2=document.createElement('span')
            //     week2.innerHTML='Week 2';
            //     trackedEle.appendChild(week2)
            //     week2.style.display='block'
            //     week2.style.marginBlock='20px'
            // const week3=document.createElement('span')
            //     week3.innerHTML='Week 3';
            //     trackedEle.appendChild(week3)
            //     week3.style.display='block'
            //     week3.style.marginBlock='20px'


                // const weekDate=document.createElement('span')
                // const weekDate2=document.createElement('span')
                // const weekDate3=document.createElement('span')
                // const weekDate4=document.createElement('span')
                // const weekDate5=document.createElement('span')
                // const weekDate6=document.createElement('span')
                // for(var i=0;i<=6;i++){
                //     weekDate.textContent=25;
                //     weekDate2.innerHTML=26;
                //     weekDate3.innerHTML=27;
                //     weekDate4.innerHTML=28;
                //     weekDate5.innerHTML=29;
                //     weekDate6.innerHTML=30;
                //     trackedList.append(weekDate,weekDate2,weekDate3,weekDate4,weekDate5,weekDate6)
                //     weekDate.style.marginInline='10px'
                //     weekDate3.style.marginInline='10px'
                //     weekDate5.style.marginInline='10px'
                //     weekDate.style.position='absolute'
                //     weekDate.style.top='18%';
                //     weekDate.style.left='5%'
                //     weekDate.style.fontSize='18px'

                // }
                
            
            
        
            // for(var i=0;i<=6;i++){
            //     const checkBox=document.createElement('input')
            //     checkBox.setAttribute('type','checkbox')
            //     trackedEle.appendChild(checkBox)
            //     checkBox.style.width='20px'
            //     checkBox.style.height='20px'
            //     checkBox.style.marginTop='30px';
            //     checkBox.style.marginLeft='30px'
            //     checkBox.style.accentColor='lime';
            //     // checkBox.style.position='absolute';
            //     // checkBox.style.top='80%';
                
            // }

            function checkBoxes(){

                for(var i=0;i<=6;i++){
                    const checkBtn=document.createElement('button')
                    checkBtn.innerHTML='...';
                    trackedEle.appendChild(checkBtn)
                    checkBtn.style.width='40px'
                    checkBtn.style.height='40px'
                    checkBtn.style.margin='20px'
                    checkBtn.style.border='3px solid goldenrod';
                    checkBtn.style.backgroundColor='lightyellow';
                    checkBtn.style.borderRadius='10px'
                    checkBtn.style.fontSize='18px';
                    // checkBtn.style.color='white'
    
                
                    checkBtn.addEventListener('click',taskComp)
                    
                    checkBtn.addEventListener('dblclick',function dblClick(){
                        checkBtn.innerHTML='&#10004';
                        checkBtn.style.border='3px solid lime'
                        checkBtn.style.backgroundColor='limegreen'
                        checkBtn.style.color='white'
              
                    })
                    function taskComp(){
                        checkBtn.innerHTML='\xD7'
                        checkBtn.style.backgroundColor='tomato'
                        checkBtn.style.border='3px solid red'
                        // checkBtn.classList.toggle('toggle')
                        checkBtn.style.color='white'
                    }
                }
            }



            const addBtn=document.createElement('button')
            addBtn.innerHTML='Done'
            trackedEle.appendChild(addBtn);
            addBtn.style.position='relative';
            addBtn.style.bottom='8%'    
            addBtn.style.left='80%'
            addBtn.style.padding='8px 20px'    
            addBtn.style.backgroundColor='limegreen'    
            addBtn.style.border='none';    
            addBtn.style.color='white';
            addBtn.style.borderRadius='5px' 
            

           

            addBtn.addEventListener('click',removeEle)

            function removeEle(){
                addBtn.parentElement.remove()
            }
        
        
        
        }



// function weekDateChange(){
//     // const objOfDate={first:'Monday',second:'Tuesday',third:'Wednesday',fourth:'Thursday',fifth:'Friday',sixth:'Saturday',seventh:'Sunday'}

//     // console.log(objOfDate.first,objOfDate.second)
//     const counter=0;
//     const arrOfWeek=document.querySelectorAll('.week');
//     arrOfWeek.forEach((element,index)=>{
//         element.style.right= `${index*100}%`
//     })

//     arrOfWeek.forEach(arrOfWeekSlide)

//     function arrOfWeekSlide(element,index){
//         element.style.left=`${index * 100}%`
//     }


const prevBtn=document.createElement('button')
const toDoParent=document.getElementById('todo')
prevBtn.innerHTML='Previous'
toDoParent.appendChild(prevBtn)

const p=prevBtn
p.style.backgroundColor='khaki';
p.style.position='absolute';
p.style.left='5%';
p.style.bottom='2%';
p.style.fontWeight='bold';
p.style.borderRadius='5px';
p.style.padding='8px 20px';
p.style.border='none'

// Arrow function used for event listener

p.addEventListener('click',(dateUpd) => {
    const d=new Date()
    dateNumber.innerHTML=d.getDate()-1;
    const weekPrev=d.getDay()-1

    const weekArr=['Monday','Tues','Wed','Thursday','Friday','Saturday','Sunday']
    // for(var i=0;i<=weekArr.length;i++){

        
    //     weekDay.innerHTML=

    // }

    let i=d.getDate();
    // console.log(weekArrConv)
    weekDay.innerHTML=weekArr[i];

    const yearHtml=d.getFullYear()-1;
    year.innerHTML=yearHtml;
})



// function weekDateChange(){
//     // const objOfDate={first:'Monday',second:'Tuesday',third:'Wednesday',fourth:'Thursday',fifth:'Friday',sixth:'Saturday',seventh:'Sunday'}
//     const objOfDate=['Mon','Tues','Wed']
//     const i=0;
//     // const weekDate=objOfDate[i];
//     // const weekList=document.querySelector('.weeklist');
//     // const week=document.querySelectorAll('.week');

//     // weekList.appendChild(weekDate);
//     // function counter(){
//     //     objOfDate.forEach(function(item){
//     //         console.log(item)
//     //     })

//     // counter()
       
//     // }

//     function displayDate(){
//         date=new Date()
//         const w=date.getDay()
//         console.log(w)
//         const weekDayArr=(w)=>{

//         }

//     }
//     displayDate()

// }

const dateNumber=document.getElementById('date-number');
const monthYear=document.getElementById('month')
const year=document.getElementById('year')
const weekDay=document.getElementById('week')
console.log(dateNumber,monthYear,year,weekDay)

function dateUpdate(){
    const d=new Date();

    // Using the local string method for converting of the month number to its name
    const monthStr=d.toLocaleString('default',{month:'long'})
    monthYear.innerHTML=monthStr;

    const weekDayChange=d.toLocaleString('default',{weekday:'long'});
    weekDay.innerHTML=weekDayChange;

    year.innerHTML=2023;

    const dateNumberHtml=d.getDate()
    dateNumber.innerHTML=dateNumberHtml

    return weekDayChange

}
const dateUpd =dateUpdate()

console.log(dateUpd)


