export class DummyService {

    private dep: EvilDependency;

    set evilDependency(evilDependency: EvilDependency) {
        this.dep = evilDependency;
    }

    getValues() {
        return [1, 2, 3];
    }

    getEvilString() {
        return this.dep.heavyCrap();
    }

}

export class EvilDependency {

    heavyCrap() {
        return "Hans";
    }
}