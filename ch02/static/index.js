let count = 0;
function render(){
    document.getElementById('countP').innerHTML=`
        <h3>${count}</h3>
    `;
}
document.getElementById('up').addEventListener('click', ()=> {
    count++;
    render();
});
render();

/*document.getElementById('link').addEventListener('click', ()=>{
    location.href='http://127.0.0.1:5001/save/'+count;
});*/
document.getElementById('link').addEventListener('click', async()=>{
    let res = await fetch("/submit", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({value: count})
    });
    count=0;
    render();
})
