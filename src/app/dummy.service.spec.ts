import {DummyService, EvilDependency} from "./dummy.service";

describe('the dummy service', () => {

    let service: DummyService;

    beforeEach(() => {
        service = new DummyService();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getValues', () => {

        it('should be defined', () => {
            expect(service.getValues).toBeDefined();
        });

        it('should return 1,2 and 3', () => {
            let expectedNumbers = [1, 2, 3];

            let values: number[] = service.getValues();

            expect(values).toEqual(expectedNumbers);
        });
    });

    describe('getEvilString', () => {
        it('should use the evilDependency', () => {
            let fakeDep: EvilDependency = {
                heavyCrap: () => "dummyValue"
            };

            service.evilDependency = fakeDep;

            expect(service.getEvilString()).toBe("dummyValue");
        });

        it('should call the evilDependency', () => {
            let dep: EvilDependency = new EvilDependency();

            service.evilDependency = dep;
            let spy = spyOn(dep, 'heavyCrap');
            spy.and.returnValue("return value");

            expect(service.getEvilString()).toBe("return value");
            expect(spy).toHaveBeenCalled();
            expect(dep).toBeTruthy();
            expect(spy.calls.count().toFixed(1));
        });
    });
});