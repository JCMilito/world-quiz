export default class Question {
    readonly query: string;
    readonly alternatives: string[];
    readonly correctIndex: number;

    constructor(query: string, alternatives: string[], correctIndex: number) {
        this.query = query;
        this.alternatives = alternatives;
        this.correctIndex = correctIndex;
    }
    
}