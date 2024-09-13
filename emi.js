const loanamount=document.querySelector('#loan-amount-input');
const interestRate=document.querySelector('#interest-rate-info');
const months=document.querySelector('#months-to-info');

const calculate=document.querySelector('#calculator');
const emi=document.querySelector('#emi');

function calculateEmi(){
    if(loanamount.value === ''  || interestRate.value=== '' || months.value===''){
        alert('Please enter all values');
        return;
    }
    else{
        const lm= loanamount.value;
        const ir=interestRate.value / 1200;
        const mon= months.value;

        const emiVal= (lm * ir * (1+ir) ** mon) / ((1+ir) ** mon - 1);
        emi.textContent = emiVal.toFixed(2);

    }
    
   
}

calculate.addEventListener('click', calculateEmi);

