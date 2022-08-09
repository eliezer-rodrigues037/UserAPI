import { Response } from "express";

export type MockResponse<TResult> = Response & {
    state: {
        status?: number;
        sendStatus?: number;
        json?: TResult | unknown;
    };
};

export function makeMockResponse<TResult>() {
    const response = {
        state: {},
    } as MockResponse<TResult>;

    response.status = (status: number) => {
        response.state.status = status;
        return response;
    };
    response.sendStatus = (status: number) => {
        response.state.sendStatus = status;
        return response;
    };

    response.json = (json: TResult) => {
        response.state.json = json;
        return response;
    };

    return response;
}
