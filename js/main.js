const text = document.querySelector("#text");
const tasks = document.querySelector("#tasks");
const count = document.querySelector("#count");
const done = document.querySelector("#done");
let c = 0;
let d = 0;
function add()
{
    if(text.value.trim() == "")
    {
        alert("can't add empty text.");
        return
    }
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.textContent ="X";
    item.textContent = text.value.trim();
    item.appendChild(delBtn);
    tasks.appendChild(item);
    text.value = "";

    delBtn.addEventListener('click',()=>{
        item.innerHTML = `<del>${item.textContent.slice(0,item.textContent.length-1)}</del>`
        d++;
        done.innerHTML = d;
        if(c==d)
        {
            tasks.innerHTML = "<h2 class='text-center'>congratulations your all done Tasks🎉🎈</h2>"
            blast();
        }
    })
    c++
    count.innerHTML = c;
}