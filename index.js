//Bước 4: Viết code chèn phần tử vào DOM
//LẤY PHẦN TỬ UL GÁN VÀO TU DO LIST
const todolist = document.querySelector('ul');
//TAO BIẾN LI MỚI GÁN VÀO DO...
const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';
//THEM LI MOI TAO VAO LIST
todolist.appendChild(newTodo);

//Bước 5: Chèn một phần tử ở trước một phần tử đã tồn tại
//TAO BIẾN LI MỚI GÁN VÀO DO...
const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'Pay bills';
//CHEN VÀO ĐẢU HÀNG
todolist.insertBefore(anotherTodo, todolist.firstElementChild);

//Bước 6: Thay thế một phần tử
const modifiedTodo = document.createElement('li')
modifiedTodo.textContent = 'Feed the dog'
todolist.replaceChild(modifiedTodo, todolist.children[2])

//Bước 7: Xóa một phần tử
todolist.children[1].remove();
