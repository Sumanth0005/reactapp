export interface routeItem{
    // name?: string; /* if ? mark is used then the this may be optional*/ 
    name:string,
    children:routeItem[],
    route: string;

}
export interface appRoutes{
    name: string,
    routes:routeItem[],
}