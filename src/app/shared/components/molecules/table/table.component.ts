import { Component, Input } from '@angular/core';
import { DataTableContent } from '../../../interfaces/table.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() columns: string[] = [];
  @Input() data: DataTableContent[] = [];
}
