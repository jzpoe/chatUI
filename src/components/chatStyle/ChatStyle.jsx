import React, { useEffect, useState } from 'react'
import { CardContent, Card, Form    , Button, FormField, Container } from 'semantic-ui-react'



const ChatStyle = ({ socket, username, room }) => {
    const [current, setCurrent] = useState("")

    const handleCurrent = async () => {
        if (username && current) {
            const info = {
                message: current,
                room,
                author: username,
                time: new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes() +
                    ":" +
                    new Date(Date.now()).getSeconds(),

            };

            await socket.emit("send_message", info)
        }
    }

    useEffect(() => {
        socket.on("receive_mesagge", (data) => {
            console.log(data)
        })
    }, [socket])

    return (
        <Container>
            <Card>
                <CardContent header='Chat en vivo' />
                <CardContent extra>
                <Form>
                <input type="text" placeholder='escribe algo...'
                        onChange={e => setCurrent(e.target.value)}
                    />
                </Form>
                <FormField>
                
                </FormField>
                    
                    <Button onClick={handleCurrent}>Enviar </Button>
                </CardContent>
            </Card>

            <section className='chat-header'>

            </section>
            <section className='messages'>

            </section>
            <section className='chat-footer'>

            </section>
        </Container>
    )
}

export default ChatStyle