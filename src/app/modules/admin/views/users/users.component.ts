import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../../shared/components/molecules/table/table.component';
import { DataTableContent } from '../../../../shared/interfaces/table.interface';
import { LoadingService } from '../../../../shared/services/loading/loading.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { Users } from '../../../../shared/interfaces/user.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [DatePipe]
})
export class UsersComponent implements OnInit {

  protected columnsTable: string[] = ['Nombre', 'Email', 'Fecha Registro', 'Ultimo Login'];
  protected dataTable: DataTableContent[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private loadingService: LoadingService,
    private userService: UserService,
    private datePipe: DatePipe
  ){}

  async ngOnInit(): Promise<void> {
    this.getAllUsers();
  }

  async getAllUsers(): Promise<void> {
    this.loadingService.setControlLoading(true);
    try{
      const users: Users[] = await this.userService.getAllUser();
      console.log(users)
      this.mapTableUsers(users);
    }catch(e){
      console.warn(e);
    }finally{
      this.loadingService.setControlLoading(false);
      this.cdr.detectChanges();
    }
  }

  mapTableUsers(users: Users[]){
    this.dataTable = users.map<DataTableContent>(us => (
      {
        'Nombre': `${us.names} ${us.lastNames}`,
        'Email': us.email,
        'Fecha Registro': this.formatearFecha(new Date(us.createDate)),
        'Ultimo Login': us.userLogins?.loginCreate ? this.formatearFecha(new Date(us.userLogins.loginCreate)): ''
      }
    ))
  }

  formatearFecha(date: Date): string | null {
    return this.datePipe.transform(date, 'yyyy-MM-dd h:mm:ss a');
  }

}
