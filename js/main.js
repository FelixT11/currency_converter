// currency rates are from the 11.08.2017, 13:40.

function calc() {
    
    var fromSelect = document.getElementById('fromSelect').value;
    
    var fromAmount = document.getElementById('fromAmount').value;

    var toSelect = document.getElementById('toSelect').value;
    
    var rate = '';
    
if(fromSelect === 'EUR') {    
    
    if(toSelect === 'EUR')
    {
    
        rate = fromAmount*1;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    if(toSelect === 'ZAR')
    {
        
        rate = fromAmount*15.8868;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'GBP')
    {
    
        rate = fromAmount*0.9065;        
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'USD')
    {
        
        rate = fromAmount*1.1770;  
    
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    }
    
    
if(fromSelect === 'ZAR') {    

    if(toSelect === 'EUR')
    {
    
        rate = fromAmount*0.0629;  
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    if(toSelect === 'ZAR')
    {
    
        rate = fromAmount*1;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'GBP')
    {
    
        rate = fromAmount*0.0571;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'USD')
    {
    
        rate = fromAmount*0.0741;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    }
 
    
if(fromSelect === 'GBP') {    

    if(toSelect === 'EUR')
    {
    
        rate = fromAmount*1.1031;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    if(toSelect === 'ZAR')
    {
    
        rate = fromAmount*17.5245;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'GBP')
    {
    
        rate = fromAmount*1;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'USD')
    {
    
        rate = fromAmount*1.2984;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    }
 
    
if(fromSelect === 'USD') {    

    if(toSelect === 'EUR')
    {
    
        rate = fromAmount*0.8496;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    if(toSelect === 'ZAR')
    {
    
        rate = fromAmount*13.4949;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'GBP')
    {
    
        rate = fromAmount*0.7704;
        
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }

    if(toSelect === 'USD')
    {
        
        rate = fromAmount*1;
    
        document.getElementById('toAmount').value = rate.toFixed(2);
    
    }
    
    }
   
};


var convert = document.getElementById('convert');

convert.addEventListener('click', function(){
    calc();
    
});