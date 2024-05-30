Realtime game (multiplayer chess game)

in some cases the server need to push events to the client , the client doesnot necessarily need to ask for them
for that : not use http server

use : WebSocket

given the persistent connections are made , the events that needed to be shared between the browser and the server are : 

1. user clicks on "Play" button (connect me with the pending participant who is waiting or make me the pending participant)
for this purpose a single variable can be maintained and we donot need a queue as atmax 1 person would be waiting for an opponent.

when client1 and client2 (browsers) are connected to the server , then the server can maintain a in memory variable containing the state of each
games : array of Game Class