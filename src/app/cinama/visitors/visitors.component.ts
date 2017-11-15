import {Component, OnInit} from "@angular/core";
import {VisitorService} from "./visitor.service";
import {Visitor} from "./visitor.model";
import {Country} from "../../countries/country.model";
import {CountryService} from "../../countries/country.service";

@Component({
  selector: 'visitors',
  templateUrl: './visitors.component.html'
})
export class VisitorsComponent implements OnInit {

  visitors: Visitor[];
  selectedVisitor: Visitor;

  countries: Country[];

  constructor(private visitorService: VisitorService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.visitorService.getAllVisitors()
      .subscribe(visitors => this.visitors = visitors);

    this.countryService.getAllCountries()
      .subscribe(countries => this.countries = countries);
  }

  selectVisitor(visitor: Visitor) {
    this.selectedVisitor = visitor;
  }

  onVisitorChanged(visitor: Visitor) {
    this.visitorService.updateVisitor(visitor)
      .subscribe(visitor => {
        const idx = this.visitors.findIndex(changedVisitor => changedVisitor.id === visitor.id)
        this.visitors[idx] = visitor;
      });
  }

  onVisitorDeleted(visitor: Visitor) {
    this.visitorService.deleteVisitor(visitor)
      .subscribe(() => {
        this.visitors = this.visitors.filter(deletedVisitor => deletedVisitor !== visitor);
        this.selectedVisitor = undefined;
      });
  }
}
