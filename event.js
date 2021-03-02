//Create some sort of animation using toggleClass 
//(Aim ---> Demonstrate DOM manipulation)

$(document).ready(function(){
    $('button').click(function(){
        $(this).toggleClass('display')

        $(this).text($(this).text() == 'Lights up !!' ? 'Lights out !!' : 'Lights up !!')
    })
    
})

