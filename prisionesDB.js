export class PrisionesDB {
    prisiones = [{
        id: 1,
        prisioneros: []
    },{
        id: 2,
        prisioneros: [3]
    },{
        id: 3,
        prisioneros: []
    }]

    getAll() {
        return this.prisiones
    }

    getById(id) {
        return this.prisiones.find(prision => prision.id == id);
    }

    imprision(idPresion, idMafioso) {
        this.getById(idPresion).prisioneros.push(idMafioso);
    }
}
