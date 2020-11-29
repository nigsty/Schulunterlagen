const toggleTheme = document.querySelector('#theme-switcher');
const currentTheme = localStorage.getItem('themeType');
const themeSwitcher = document.getElementById("theme-switcher");
const themeSwitcherVal = '';

if (currentTheme === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('themeType', 'dark');
	document.getElementById("theme-switcher").value = "dark";
}
else if (currentTheme === 'light') { 
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('themeType', 'light');
	document.getElementById("theme-switcher").value = 'light';
}  

toggleTheme.addEventListener('change', e => {
	const changetheme = e.target.value;
    if (changetheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('themeType', 'light');        
    }
    else { 
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('themeType', 'dark');        
    }  
});

function onChangeTask(id){
	let data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : { items:[] };
	const finisheddate = new Date();
	objIndex =  data.items.findIndex((obj => obj.id == id));
	
	if(data.items[objIndex].completed == false){
		data.items[objIndex].completed = true;
		data.items[objIndex].finishedOn = finisheddate;
            } else{
                data.items[objIndex].completed = false;
                data.items[objIndex].finishedOn = '';
			}
			update_local_storage(data);
}

function editTask(id){	
	const parentDOM = document.getElementById("listItem-"+id);
	const editStatus = parentDOM.getAttribute('data-edit');
	
	// Get local storage data
	let data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : { items:[] };
	
	//Find index of specific object using findIndex method.    
	objIndex =  data.items.findIndex((obj => obj.id == id));
	
	if(editStatus == null){
		parentDOM.setAttribute('data-edit','true');
		
		// Edit button
		const button = parentDOM.getElementsByClassName("edit");
		button[0].classList.add('save');
		
		
		// Description text
		const itemDescription = parentDOM.getElementsByClassName("itemDescription");
		let $txt = '<input type="text" class="Description-editable" value="'+itemDescription[0].innerText+'" />';
		itemDescription[0].innerHTML = $txt;
		console.log('the edit key pressed')		
		
		
	}else{
		parentDOM.removeAttribute('data-edit');
	
		// Description text
		const itemDescription = parentDOM.getElementsByClassName("itemDescription");
		const $txt = parentDOM.getElementsByClassName("Description-editable")[0].value;
		data.items[objIndex].descriptionValue = $txt;
		itemDescription[0].innerHTML = $txt;
		console.log('the save key  pressed')
		
		// Edit button
		const button = parentDOM.getElementsByClassName("edit");
		button[0].classList.remove('save');
	}

    // Update local storage data
	update_local_storage(data);
}

// Update local data Storage
function update_local_storage(data){
	localStorage.setItem("todoList",JSON.stringify(data));
}