import { Component } from '@angular/core';
import { TableComponent } from '../../../../shared/components/molecules/table/table.component';
import { DataTableContent } from '../../../../shared/interfaces/table.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  protected columnsTable: string[] = ['Nombre', 'Email', 'Fecha Registro', 'Ultimo Login'];
  protected dataTable: DataTableContent[] = [
    {
      'Nombre': 'Juan Perez',
      'Email': 'juanperez@gmail.com',
      'Fecha Registro': '10/10/2025',
      'Ultimo Login': '10/10/2025'
    },
    {
      'Nombre': 'Juan Perez',
      'Email': 'juanperez@gmail.com',
      'Fecha Registro': '10/10/2025',
      'Ultimo Login': '10/10/2025'
    },
    {
      'Nombre': 'Juan Perez',
      'Email': 'juanperez@gmail.com',
      'Fecha Registro': '10/10/2025',
      'Ultimo Login': '10/10/2025'
    }
  ]

}
