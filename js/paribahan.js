
const seats = document.getElementsByClassName("seat-btn");
// console.log(seats);
let count = 0;
let seatLeft =40;
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(seat);
    seat.addEventListener('click',function(e){
        console.log('clicked');
        count=count+1;
        seatLeft=seatLeft-1;
        // console.log(e.target)
        setInnerText("counts",count);
        setInnerText("seats-left",seatLeft);
         const seatNumber=e.target.innerText;
         
         const addSeatNumber=document.getElementById("addSeat");
         const li=document.createElement('li');
         const p =document.createElement('p');
         const p2 =document.createElement('p');
         const p3 =document.createElement('p');
         p.innerText=seatNumber;
         p2.innerText='Economy';
         p3.innerText=550;
         li.appendChild(p);
         li.appendChild(p2);
         li.appendChild(p3);
         addSeatNumber.appendChild(li);
         const Taka = parseInt(550);
         console.log( typeof Taka);

         const totalPrice =document.getElementById('totalPrice').innerText;
         const totalPrices = parseInt(totalPrice)
         console.log( typeof totalPrices);
         const grandTotal = document.getElementById('grend-total').innerText;
         const grandTotals=parseInt(grandTotal);
         
         const total=document.getElementById('totalPrice').innerText=totalPrices+Taka;
         document.getElementById('grend-total').innerText=grandTotals+Taka;

         e.target.style.backgroundColor="green";
         document.getElementById("input-field");

         let counted =0;
         if(seatNumber==4){
            document.getElementById("input-field").removeAttribute("disabled");

            let coupon =document.getElementById("coupon-input").innerText.toUpperCase();
          if(coupon==="NEW15" || coupon==="COUPLE 20"){
            document.getElementById("coupon-input").classList.add("hidden");
          }
          else{
            alert('invalid coupon');
          }

         }
         else{
            alart ("please buy 4 seat and the discound");
         }


         



    })
    
}
function setInnerText (id,value){
    document.getElementById(id).innerText=value;
}

