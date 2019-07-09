// function fetchIssues () {
//     var issues = JSON.parse(localStorage.getItem('issues'));
//     var issuesList = document.getElementById('issuesList');
    
//     issuesList.innerHTML = '';
    
//     if(issues.length!==null){
//         issues.map((issue)=> {
//             var id = issue.id;
//                 var desc = issue.description;
//                 var severity = issue.severity;
//                 var assignedTo = issue.assignedTo;
//                 var status = issue.status;
                
//                 issuesList.innerHTML +=   '<div class="well">'+
//                                           '<h6>Issue ID: ' + id + '</h6>'+
//                                           '<p><span class="label label-info">' + status + '</span></p>'+
//                                           '<h3>' + desc + '</h3>'+
//                                           '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' '+
//                                           '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
//                                           '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> '+
//                                           '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
//                                           '</div>';
//         });
//     } 
//   }

//   function saveIssue(e) {
//     var issueId = chance.guid();
//     var issueDesc = document.getElementById('issueDescInput').value;
//     var issueSeverity = document.getElementById('issueSeverityInput').value;
//     var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
//     var issueStatus = 'Open';
//     var issue = {
//       id: issueId,
//       description: issueDesc,
//       severity: issueSeverity,
//       assignedTo: issueAssignedTo,
//       status: issueStatus
//     }
    
//     if (localStorage.getItem('issues') === null) {
//       var issues = [];
//       issues.push(issue);
//       localStorage.setItem('issues', JSON.stringify(issues));
//     } else {
//       var issues = JSON.parse(localStorage.getItem('issues'));
//       issues.push(issue);
//       localStorage.setItem('issues', JSON.stringify(issues));
//     }
    
//     document.getElementById('issueInputForm').reset();
   
//     fetchIssues();
    
//     e.preventDefault(); 
//   }

//   function setStatusClosed (id) {
//     var issues = JSON.parse(localStorage.getItem('issues'));
    
//     for(var i = 0; i < issues.length; i++) {
//       if (issues[i].id == id) {
//         issues[i].status = "Closed";
//       }
//     }
      
//     localStorage.setItem('issues', JSON.stringify(issues));
    
//     fetchIssues();
//   }


  function deleteTask (id) {

    console.log(id);
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for(var i = 0; i < tasks.length; i++) {
      if (tasks[i].taskId == id) {
        tasks.splice(i, 1);
      }
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    fetchTasks();
  }

  function addTask(e) {
    var taskId = chance.guid();
    var taskName = document.getElementById('taskNameInput').value;
    console.log(taskId , taskName);
    var task = {
      taskId : taskId,
      taskName: taskName
    }
    
    if (localStorage.getItem('tasks') === null) {
      var tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {  
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    document.getElementById('taskNameInput').value = '';
    console.log("task Added");
   
    fetchTasks();
    
    e.preventDefault(); 
  }

  function fetchTasks(){
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    var tasksList = document.getElementById('tasksList');
    
    tasksList.innerHTML = '';
    if(tasks!==null){
      console.log(typeof(tasks));
      // var tasks = localStorage.getItem('tasks');

      // tasks.map((task) =>{
      //   console.log(task);
      // });

      tasks.map((task) => {
        var taskId = task.taskId;
          tasksList.innerHTML += '<li><h3>' + task.taskName + '</h3><div class="right"><button onclick="deleteTask(\''+ taskId +'\')"><i class="fa fa-check" aria-hidden="true"></i></button><button onclick="deleteTask(\''+ taskId +'\')"><i class="fa fa-trash" aria-hidden="true"></i></button></div></li>';
      });
    }
  }