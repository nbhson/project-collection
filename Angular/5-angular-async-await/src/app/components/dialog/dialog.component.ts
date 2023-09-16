import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from 'src/apis/app.api';
import { ScrollToBottomDirective } from 'src/app/directive/scroll.directive';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild(ScrollToBottomDirective) scroll!: ScrollToBottomDirective;

  listTodos: Array<Todo> = new Array<Todo>()

  constructor(
    private _appService: AppService,
    public _dialogRef: MatDialogRef<DialogComponent>,
    private _cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.onSubmit(1)
  }

  ngAfterContentChecked() {
    this._cdref.detectChanges();
  }

  async onSubmit(id: number) {
    let todo = await this._appService.getTodo(id)

    if (todo) {
      this.listTodos.push(todo)
      id += 1

      setTimeout(() => {
        this.onSubmit(id)
      }, 1500);
    }
  }

  onCancel(): void {
    this._dialogRef.close()
  }

}
