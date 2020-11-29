(function() {
	let data = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) :
	{ items:[] };
	
	function update_local_storage(){
		localStorage.setItem('todoList',JSON.stringify(data));
	}	
	// setSaveTodos(data);
	
	const form = document.querySelector('form');
	const todo = document.querySelector('#todo');
	const clear = document.querySelector('#clear');
		
	form.addEventListener('submit', e =>{
		e.preventDefault();
		add_item();
		location.assign('index.html');
	});

	function add_item() {
		const title = document.querySelector('#title');
		const description = document.querySelector('#description');
		const importancy = document.querySelector('#importancy');
		const doneUntil = document.querySelector('#doneUntil');
		if(!title.value) return;
		let current_item = {
			id: Math.floor(Math.random()*100),
			titleValue: title.value,
			descriptionValue: description.value,
			importancyValue: importancy.value,
			doneUntilValue: doneUntil.value,
			completed: false,
			createdOn: new Date(),
			finishedOn: ''
		}
		data.items.push(current_item);
		form.reset();
		update_local_storage();
	}
	
	clear.addEventListener('click', () => {
		while(todo.firstChild){
			todo.removeChild(todo.firstChild);
		}
		localStorage.clear();
	});
	
	})();
	
	