// Initialize socket.io for real-time communication with the server
const socket = io("/");
const videoGrid = document.getElementById("video-grid");

// Initialize the Peer object for WebRTC communication
const myPeer = new Peer(undefined, {
    host: "/",
    port: "3001",
});

// Create the user's own video element and mute it
const myVideo = document.createElement("video");
myVideo.muted = true;

// When the Peer connection is established, log the user's ID and notify the server
myPeer.on("open", (id) => {
    socket.emit("new-user", id);
});

// When a new user connects, request access to their audio and video streams
socket.on('user-connected', newConnectedUserId => {
    // Check for browser support for getUserMedia
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
    // Request access to video and audio streams
    getUserMedia({ video: true, audio: true }, function (stream) {
        // Initiate a call to the new user and display their stream
        var call = myPeer.call(newConnectedUserId, stream);
        call.on('stream', function (remoteStream) {
            const video = document.createElement("video");
            addVideoStream(video, remoteStream);
        });
    }, function (err) {
        console.log('Failed to get local stream', err);
    });
});

// Check for browser support for getUserMedia
var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

// When a call is received, answer it and display the remote stream
myPeer.on('call', function(call) {
    // Request access to video and audio streams
    getUserMedia({ video: true, audio: true }, function(stream) {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', function(remoteStream) {
            const video = document.createElement("video");
            addVideoStream(video, remoteStream);
        });
    }, function(err) {
        console.log('Failed to get local stream', err);
    });
});

// Function to add a video stream to the user's video grid
function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
        video.play();
        videoGrid.append(video);
    });
}

// Function to connect to a new user and display their video stream
function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
        video.remove();
    });
}