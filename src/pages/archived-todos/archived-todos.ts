import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TodoServiceProvider } from '.././../providers/todo-service/todo-service'

/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {
  
  public archivedTodos = [];

  constructor(private todoService: TodoServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivedTodosPage');
  this.archivedTodos = this.todoService.getArchivedTodos();  
  }

}
