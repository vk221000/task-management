var todo=[];
var completedtask=[];
$("#submit").click(function(){
    var task=$("#addtask").val();
    if (task!=""){
        todo.push(task);
        display();
    }
});

function display(){
    var html="<ul>";
    for ( i=0;i<todo.length;i++) {
        html+="<li><input type='checkbox'class='checkbox' data-id="+i+">"+todo[i]+"<input type='text' class='modifytest'><input type='button' class='submit-edited-value' data-id="+i+" value='edit'><input type='button' class='delete-value' data-id="+i+" value='delete'></li>";
    }
    html+="</ul>";
    $('#to-do-tasks').html(html);
}
$("#to-do-tasks").on("click",".submit-edited-value",function(){
    var field=$(this).prev();
    var task=field.val();
    var i=$(this).data('id');
    if (task=="") {
        field.val(todo[i]);
    }
    else{
        todo[i]=task;
        display();
    } 
});
$("#to-do-tasks").on("click",".delete-value",function(){
    var i=$(this).data('id');
    todo.splice(i,1);
    display();

});
function displayCompleted(){
    var html1="<ul>";
    for ( i=0;i<completedtask.length;i++) {
        html1+="<li><input type='checkbox' class='checkbox' data-id="+i+" checked>"+completedtask[i]+"<input type='text' class='modifytest'><input type='button' class='submit-edited-value' data-id="+i+" value='edit'><input type='button' class='delete-value' data-id="+i+" value='delete'></li>";
    }
    html1+="</ul>";
    $('#completed-tasks').html(html1);
}
$("#to-do-tasks").on("click",".checkbox",function() {
    if(this.checked){
        var id=$(this).data("id");
        var data=todo[id];
        todo.splice(id,1);
        completedtask.push(data);
        display();
        displayCompleted();

    }

});
$("#completed-tasks").on("click",".checkbox",function() {
    if(!this.checked){
        var id=$(this).data("id");
        var data=completedtask[id];
        completedtask.splice(id,1);
        todo.push(data);
        display();
        displayCompleted();
    }

});
$("#completed-tasks").on("click",".submit-edited-value",function(){
    var field=$(this).prev();
    var task=field.val();
    var i=$(this).data('id');
    if (task=="") {
        field.val(completedtask[i]);
    }
    else{
        completedtask[i]=task;
        displayCompleted();
    } 
});
$("#completed-tasks").on("click",".delete-value",function(){
    var i=$(this).data('id');
    completedtask.splice(i,1);
    displayCompleted();

});