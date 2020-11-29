'use strict'

const getSavedTodos = function() {
    /* let data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) :
    { items:[] }; */
    console.log('hello from function js called in script js invoked in Script js') 

    if(data.items){
        const itemJSON = localStorage.getItem("todoList")
        
        if (itemJSON != null){
            return JSON.parse(itemJSON)
        } else {
            return []
    }
}
}

// Save the Todos to localStorage
const setSaveTodos = function(data){
    localStorage.setItem("todoList",JSON.stringify(data));
}

// Generate the DOM structure for a Todo Item 64. splitting up our App. code


// Render application Todos