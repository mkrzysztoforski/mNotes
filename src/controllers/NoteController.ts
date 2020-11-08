import { Callback, Controller, Endpoint, EndpointType } from '@reste/x';

@Controller('/api')
export class NoteController {

    @Endpoint('/create', EndpointType.POST)
    public create(callback: Callback): void {
        callback.response.send('create');
    }

    @Endpoint('/getById/:id', EndpointType.GET)
    public getById(callback: Callback): void {
        callback.response.send('getByID: ' + callback.request.params.id);
    }

    @Endpoint('/getAll', EndpointType.GET)
    public getAll(callback: Callback): void {
        callback.response.send('getAll');
    }

    @Endpoint('/updateById', EndpointType.POST)
    public updateById(callback: Callback): void {
        callback.response.send('updateById');
    }

    @Endpoint('/delete', EndpointType.DELETE)
    public delete(callback: Callback): void {
        callback.response.send('delete');
    }
}
