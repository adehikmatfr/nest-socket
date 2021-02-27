import { Socket } from 'socket.io';

export class SocketIoStrategy{
    public socket: Socket;
    constructor(socket: Socket){
        this.socket = socket;
    }

    public room(roomName: string, type: 'leave'|'join'): string{
       const rooms: Set<string> = this.socket.rooms;
       if(rooms[roomName] == undefined && type == 'join'){
           this.socket.join(roomName);
       }else{
        this.socket.leave(roomName);
       }
       console.log(rooms);
        return roomName;
    }

    public emit<T>(roomName: string, payload: T): boolean{
        return this.socket.emit(roomName, payload);
    }

    public deleteRoom(roomName: string){
        this.socket.rooms.delete(roomName);
    }

    public resetRooms(){
        this.socket.rooms.clear();
    }

    public countListener(eventName: string){
        this.socket.listenerCount(eventName);
    }
}