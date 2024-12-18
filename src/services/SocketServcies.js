import io from 'socket.io-client';

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io('http://3.91.192.145:3001/chat-socket', {
        transports: ['websocket'],
      });
    } catch (error) {
    }
  };

  emit(event, data = {}) {
    this.socket.emit(event, data);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }

  disconnect() {
    this.socket.disconnect();
  }

  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const SocketServcies = new WSService();

export default SocketServcies;
