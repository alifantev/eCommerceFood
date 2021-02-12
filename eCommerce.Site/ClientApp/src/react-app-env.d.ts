/// <reference types="react-scripts" />
declare module '*.scss';

declare namespace NodeJS {

    interface ProcessEnv {
        REACT_APP_API_HOST: string,
    }
}
