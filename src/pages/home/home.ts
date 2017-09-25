import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';

import { ArchivedTodosPage } from '../archived-todos/archived-todos'

import { TodoServiceProvider } from '.././../providers/todo-service/todo-service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];

  public reorderIsEnabled = false;

  constructor(private toastController: ToastController,private todoService: TodoServiceProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = todoService.getTodos();
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      // title: "Add Todo",
      // message: "Enter your todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData)=>{
            let todoText = inputData;
              todoText = inputData.addTodoInput;
              this.todoService.addTodo(todoText);

              addTodoAlert.onDidDismiss(()=>{
                let addTodoToast = this.toastController.create({
                  message: "Todo Added",
                  duration: 3000
                });
                addTodoToast.present();
              });

              
          }
        }
      ]
    });
    addTodoAlert.present();
  }
  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  archiveTodo(todoIndex){
    this.todoService.archiveTodo(todoIndex);
    
    let deleteTodoToast = this.toastController.create({
      message: "Todo Archived",
      duration: 3000
    });
    deleteTodoToast.present();
  }

  editTodo(todoIndex){
    let editTodoAlert = this.alertController.create({
      title: "Edit Todo",
      message: "Enter new todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Edit Todo",
          handler: (inputData)=>{
            let todoText = inputData;
              todoText = inputData.editTodoInput;
              this.todoService.editTodo(todoIndex,todoText);

              editTodoAlert.onDidDismiss(()=>{
                let editTodoToast = this.toastController.create({
                  message: "Todo Editted",
                  duration: 3000
                });
                editTodoToast.present();
              });

              
          }
        }
      ]
    });
    editTodoAlert.present();
    
  }
}
