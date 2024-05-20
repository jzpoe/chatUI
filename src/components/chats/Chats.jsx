import React, { useState } from 'react';
import { io } from 'socket.io-client';
import ChatStyle from '../chatStyle/ChatStyle';
import { Container, Card, CardContent, Icon, Form, FormField, Button } from 'semantic-ui-react';

const socket = io.connect("http://localhost:3001");

const Chats = () => {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");

    const handleJoinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join_room", room);
        }
    };

    // Define description variable
    const description = "Amy is a violinist with 2 years of experience in the wedding industry.";

    return (
        <Container>
            <Card fluid>
                <CardContent header='UNIRME AL CHAT' />

                <CardContent>
                    <Form>
                        <FormField>
                            <label>Usuario</label>
                            <input
                                type="text"
                                placeholder='usuario'
                                onChange={e => setUserName(e.target.value)}
                            />
                        </FormField>
                        <FormField>
                            <label>ID Sala</label>
                            <input
                                type="text"
                                placeholder='ID saLa'
                                onChange={e => setRoom(e.target.value)}
                            />
                        </FormField>
                        <FormField>
                        </FormField>
                        <Button onClick={handleJoinRoom}>
                            unirme
                        </Button>
                    </Form>
                </CardContent >

                <CardContent extra>
                    <Icon name='user' />4 Friends
                </CardContent>
            </Card>

   



            <ChatStyle socket={socket} username={userName} room={room} />
        </Container>
    );
};

export default Chats;