const calcBtn = document.getElementById('calcBtn')

calcBtn.addEventListener('click', function(event){
    event.preventDefault() // here by default form has an event so we need to disable that and then take our event
    // console.log(event.target)// her it will show the events occuring i.e click even whcih button target

    let p = document.getElementById('principal').value
    let t = document.getElementById('timespan').value
    let r = document.getElementById('rateOfInt').value

    p = Number(p)
    t = Number(t)
    r = Number(r)

    if(p > 0 && t > 0 && r > 0){
        let result = getSimpleInterest(p, t, r)
        let amount = p + result
    
        // console.log('SI: ', result, 'Amount: ', amount) //o/p ; SI:  24000 Amount:  124000
        // let box = document.getElementById('resultBox')
        // box.classList.add('show')
    
        //or
        document.getElementById('resultBox').classList.add('show')
        document.getElementById('p').innerHTML = 'Rs. '+ p
        document.getElementById('t').innerHTML = t + ' Years'
        document.getElementById('r').innerHTML = r + ' %'
        document.getElementById('result').innerHTML = 'Rs. '+ result
        document.getElementById('amount').innerHTML = 'Rs. '+ amount  
        
        document.getElementById('principal').value = ''  // to make them empty after entering values
        document.getElementById('timespan').value = ''
        document.getElementById('rateOfInt').value = ''
    }else {
        alert('Please enter all fields.')
    }
})

function getSimpleInterest(p, t, r) {
    let si = (p * t * r)/100
    return si;
}
