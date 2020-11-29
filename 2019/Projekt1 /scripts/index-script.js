(function() {
	let data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) :
	{ items:[] };
	let placeholder =	data.completed ? completed : todo;
	
	const sorter = document.getElementById('sorter');
	sorter.addEventListener('click', (event) => {
		let elementClicked = event.target;
	
		if (elementClicked.className === 'finisheddate'){
			data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : { items:[] };
			data.items.sort((a, b) => (a.finishedOn > b.finishedOn) ? 1 : -1);
			if(data.items){
				placeholder.innerHTML = '';
				for(let i=0; i<data.items.length; i++){
					if(data.items[i].completed == true){
					attach_to_dom(data.items[i]);
					}
				}
			}
			document.getElementById("todo").dataset.content = "There is no finished Todo item yet.";
		}
	
		if (elementClicked.className === 'createddate'){
			data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : { items:[] };
			data.items.sort((a, b) => (a.createdOn - b .createdOn));
			if(data.items){
				placeholder.innerHTML = '';
				for(let i=0; i<data.items.length; i++){
					attach_to_dom(data.items[i]);
				}
			}
			document.getElementById("todo").dataset.content = "There is no todo item yet to list here.";
		}
	
		if (elementClicked.className === 'importance'){
			data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : { items:[] };
			data.items.sort((a, b) => (a.importancyValue - b.importancyValue));
			if(data.items){
				placeholder.innerHTML = '';
				for(let i=0; i<data.items.length; i++){
					attach_to_dom(data.items[i]);
				}
			}			
			document.getElementById("todo").dataset.content = "There is no todo item yet to list here.";
		}
	
		if (elementClicked.className === 'finished'){
			data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : { items:[] };
			const filteredItem = data.items.filter(item => item.completed);
			if(filteredItem){
				placeholder.innerHTML = '';
				for(let i=0; i<filteredItem.length; i++){
					attach_to_dom(filteredItem[i]);
				}
			}
			document.getElementById("todo").dataset.content = "There is no todo item yet to list here.";
		}
	
	});
	
	function render(data){
		let checked_item =	(data.completed == true) ? 'checked="checked"' : '';
		return ( `
			<li data-id="${data.id}" class="listItem" id="listItem-${data.id}" >
				<div class="listColumen1">
					<div class="listItemRowOne">
						<div class="itemDone">${data.doneUntilValue}</div>
						<div class="itemTitle">${data.titleValue}</div>
						<div class="itemImportancy">1=Niedrig bis 4=sehr Wichtig: <h2 class="itemImportancy"> ${data.importancyValue}</h2></div>
					</div>
					<div class="listItemRowTwo">
						<div class="itemCheckbox"><input class="checkbox" id="checkbox" type="checkbox" name="finished" ${checked_item} onchange="onChangeTask(${data.id})"> Finished</div>
						<div class="itemDescription">${data.descriptionValue}</div>
					</div>
				</div>
				<div class="buttons">					
						<button class="edit" onClick="editTask(${data.id})"></button>
					</div>
			</li>
				`
			);
	}
	
	function attach_to_dom(data){	
		placeholder.innerHTML += render(data);
	}
	
	})(); 
	