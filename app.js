const students=["Aarav","Diya","Rahul","Sneha","Arjun"];
const list=document.getElementById("student-list");
students.forEach(name=>{const item=document.createElement("li");item.textContent=name;list.appendChild(item);});
