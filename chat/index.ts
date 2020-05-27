import Peer from 'peerjs';

const peer = new Peer('some-id', {
  host: 'localhost',
  port: 9000,
  path: '/peerjs/myapp'
});

peer.on('open', (id) => {
  console.log(id);

})
