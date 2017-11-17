import {async, inject, TestBed} from "@angular/core/testing";
import {VisitorService} from "./visitor.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {VisitorsInMemoryDataService} from "./visitors.in-memory-data.service";

describe('Visitor Service test with mocked HTTP calls', () => {
  describe('the visitor service', () => {

    let service: VisitorService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
          VisitorsInMemoryDataService)
        ],
        providers: [
          VisitorService
        ]
      });
    });

    beforeEach(inject([VisitorService], (visitorService) => {
      service = visitorService;
    }));

    it('should inject the service', () => {
      expect(service).toBeTruthy();
    });

    describe('getAllVisitors', () => {
      it('should call the correct REST endpoint', async(() => {
        service.getAllVisitors().subscribe(data => {
          expect(data.length).toEqual(2);
          expect(data[0].firstName).toEqual('Peter');
          expect(data[1].firstName).toEqual('Petra');
        }, error => {
          fail('Could not load visitors: ' + JSON.stringify(error));
        });
      }));
    });
  });
});
