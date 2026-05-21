import { Component, OnInit } from '@angular/core';
import { MetaServiceService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevaMeta: string = "";
  listaMetas: Meta[] = [];

  constructor(private metaService: MetaServiceService) {}

  ngOnInit(): void {
    this.metaService.getMetas().subscribe(res => {
      this.listaMetas = res as Meta[];
    });
  }

  agregar() {
    if(this.nuevaMeta.trim() !== "") {
      this.metaService.addMeta({ meta: this.nuevaMeta });
      this.nuevaMeta = "";
    }
  }

  eliminar(id: string) {
    this.metaService.deleteMeta(id);
  }
}