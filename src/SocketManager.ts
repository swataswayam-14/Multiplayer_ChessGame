import { randomUUID } from "crypto";
import { WebSocket } from "ws";

export class User {
    public socket: WebSocket;
    public id: string;
    public userId: string;

    constructor(socket:WebSocket , userId:string){
        this.socket = socket;
        this.userId = userId;
        this.id = randomUUID();
    }
}

export class SocketManager{
    private static instance: SocketManager;
    private interestedSockets: Map<string, User[]>; //string is the type of the keys. User[] is the type of the values. This means that each value in the map is an array of User objects.
    private userRoomMapping: Map<string, string>;

    private constructor(){
        this.interestedSockets = new Map<string , User[]>();
        this.userRoomMapping = new Map<string , string>();
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new SocketManager();
        return this.instance;
    }

    addUser(user:User , roomId:string){
        this.interestedSockets.set(roomId, [...(this.interestedSockets.get(roomId) || []), user]);
        this.userRoomMapping.set(user.userId , roomId);
    }
    broadcast(roomId:string , message :string){
        const users = this.interestedSockets.get(roomId);
        if(!users){
            console.log('No users found in the room');
            return;
        }
        users.forEach((user)=>{
            user.socket.send(message);
        });
    }
    removeUser(user:User){
        const roomId = this.userRoomMapping.get(user.userId);
        if(!roomId){
            console.log('User was not interested in any room');
            return;
        }
        const room = this.interestedSockets.get(roomId) || []
        const remainingUsers = room.filter(u => u.userId !== user.userId)
        this.interestedSockets.set(roomId , remainingUsers);
        if(this.interestedSockets.get(roomId)?.length === 0){
            this.interestedSockets.delete(roomId);
        }
        this.userRoomMapping.delete(user.userId);
    }
}