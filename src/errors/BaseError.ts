import {Dict} from "../types/main";

export default class StandardError extends Error {
    public statusCode: number;
    protected type = "STANDARD ERROR";
    protected messages : string[] = []

    constructor(statusCode: number) {
        super();
        this.statusCode = statusCode
    }

    details():Dict{
        return {
            type: this.type,
            messages : this.messages
        }
    }
}