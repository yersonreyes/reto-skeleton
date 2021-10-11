let skeleton = document.querySelectorAll('.skeleton')
let option = document.querySelectorAll('.option')


setTimeout(function(){
    option.forEach(function(item){
        item.classList.remove('loading')
    })

    skeleton.forEach(function(item){
        item.classList.add('loading')
    })
    }, 3000);