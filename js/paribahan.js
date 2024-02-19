
const seats=document.getElementsByClassName("seat-btn");
let count =0;
let seatCount =0;
let array = [];
for (let index = 0; index < seats.length; index++) {
  const seat = seats[index];
  seat.addEventListener("click",function(e){
    count=count+1;

    const totalSeat= document.getElementById("total-seat").innerText;
    const totalSeats = parseInt(totalSeat);
    const totalSeatNumber=totalSeats-1;
    setInnerText("counts",count);
    setInnerText("total-seat",totalSeatNumber);
    const seatNumber = e.target.innerText;
    
    // array.push('seatNumber');

    
    const addSeatNumber=document.getElementById("addSeat");
    const li=document.createElement('li');
    const p =document.createElement('p');
    const p2 =document.createElement('p');
    const p3 =document.createElement('p');
    p.innerText=seatNumber;
    p2.innerText="Economy";
    p3.innerText=550;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    addSeatNumber.appendChild(li);
    const Taka = parseInt(550);
    const totalPrice= document.getElementById('totalPrice').innerText;
    const totalPrices = parseInt(totalPrice);
    // console.log(typeof totalPrices);
    const grandTotal=document.getElementById('grend-total').innerText;
    const grandTotals=parseInt(grandTotal);
    
    const Total= document.getElementById('totalPrice').innerText=totalPrices+Taka;
    const gTotal = document.getElementById('grend-total').innerText=grandTotals+Taka;

    e.target.style.backgroundColor = "green";



  });
  
};

function setInnerText(id,value){
  document.getElementById(id).innerText=value;
}

const couponButton= document.getElementById('coupon-btn');
couponButton.addEventListener("click",function(){
  let couponInput=document.getElementById('input-field').value;
  let grandTotal=document.getElementById('grend-total').innerText;
  if(couponInput==="NEW15"){
    document.getElementById('input-field').classList.add('hidden');
    couponButton.classList.add("hidden");
    grandTotal2=grandTotal*0.15;
    setInnerText('grend-total', grandTotal-grandTotal2);
    
  }
  else if(couponInput==="Couple 20"){
    document.getElementById('input-field').classList.add('hidden');
    couponButton.classList.add("hidden");
    grandTotal3=grandTotal*0.20;
    setInnerText('grend-total',grandTotal-grandTotal3);
  }
  else{
    alert('invalid coupon');
  }

});

