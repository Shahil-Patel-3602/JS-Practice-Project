new Vue({
    el: '#app',
    data() {
      return {
        todoList: [
          {"id":0,"title":"Create A new Task.","done":false},
          {"id":1,"title":"Create more Tasks","done":false},
          {"id":2,"title":"Create a new pen","done":true}
        ],
        new_todo: '',
        showComplete: false,
      };
    },
    mounted() {
      this.getTodos()
    },
    watch: {
      todoList: {
        handler(updatedList) {
          localStorage.setItem('todo_list', JSON.stringify(updatedList));
        },
        deep: true
      }
    },
    computed:{
        //Compute the pending tasks
      pending() {
        return this.todoList.filter(item => !item.done)
      },
      completed() {
        return this.todoList.filter(item => item.done); 
      },
      //The Percentage of completed tasks
      completedPercentage() {
        return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
      },
      //Date handling
      today() {
        var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //By default January is 0, So add 1 to  every month
        var yyyy = today.getFullYear();
  
        if(dd<10) {
            dd = '0'+dd    // to mantain dd format add 0 in prefix
        } 
  
        if(mm<10) {
            mm = '0'+mm
        } 
  
        today = {
          day: weekday[today.getDay()],
          date:  mm + '-' + dd + '-' + yyyy,
        }
  
        return(today);
      }
    },
    methods: {
      // get all todos when loading the page
      getTodos() {
        if (localStorage.getItem('todo_list')) {
          this.todoList = JSON.parse(localStorage.getItem('todo_list'));
        }
      },
      // add a new item
      addItem() {
        // validation check
        if (this.new_todo) {
          this.todoList.unshift({
            id: this.lastId() + 1,
            title: this.new_todo,
            done: false,
          });
        }
        // reset new_todo
        this.new_todo = '';
        // save the new item in local storage
        return true;
      },
      lastId() {
        idList = this.todoList.map(item => item.id)
        return Math.max(...idList)
      },
      deleteItem(item) {
        this.todoList.splice(this.todoList.indexOf(item), 1);
        lastId = this.lId()
      },
      toggleShowComplete() {
        this.showComplete = !this.showComplete;
      },
      clearAll() {
        this.todoList = [];
      }
    },
  });