module.exports = class Player {
    constructor(id) {
        this._name;
        this._score;
        this._id = id;
        this.init();
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }

    get id() {
        return this._id;
    }

    increaseScore() {
        this._score++;
    }

    init() {
        this._score = 0;
    }
};