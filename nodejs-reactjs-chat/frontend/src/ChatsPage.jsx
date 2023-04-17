import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('6df57ae5-7648-4329-a71a-918a4a87705c', props.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh'  }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        /</div>
    )
}

export default ChatsPage