import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Visitor} from "./visitor.model";

export class VisitorsInMemoryDataService implements InMemoryDbService {
  createDb() {
    const visitors: Visitor[] = [
      {id: 1, firstName: 'Peter', lastName: 'Muster'},
      {id: 2, firstName: 'Petra', lastName: 'Petersen'}
    ];

    return {visitors};
  }
}
