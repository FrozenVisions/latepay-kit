// Late Payment of Commercial Debts (Interest) Act 1998 - simple interest
function band(amt){return amt<1000?40:amt<10000?70:100;}
function calc(amount,dueISO,asOfISO,base){
  const d=Math.max(0,Math.round((Date.parse(asOfISO)-Date.parse(dueISO))/864e5));
  const rate=8+base, daily=amount*rate/100/365;
  return {days:d,rate,daily:+daily.toFixed(2),interest:+(daily*d).toFixed(2),comp:band(amount)};
}
if(typeof module!=='undefined')module.exports={calc,band};
