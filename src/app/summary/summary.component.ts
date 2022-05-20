import { Component, Input, OnInit } from '@angular/core';
import { SummaryService } from '../core/resumen.service';
import { Summary } from '../shared/Summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() accountID?: number;
  summary?: Summary;
  constructor(private summaryService : SummaryService) { }

  ngOnInit(): void {
  }

}
