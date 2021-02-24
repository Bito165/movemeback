import { Component, OnInit, AfterViewInit,  Input, Output, ViewChild, EventEmitter } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

// @ts-ignore
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  @Input() displayedColumns: string[];
  @Input() totalLength: number;
  @Input() noPagination: boolean;

  selection = new SelectionModel<any>(true, []);
  exemptions: string[] = ['options'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void{

  }

  ngAfterViewInit(): void{
    if (this.dataSource){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));

      // this.actionBulkSelction.emit(this.selection.selected)
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // this.actionBulkSelction.emit(this.selection.selected)
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;

  }

  // paginatorEvent: PageEvent()
}
