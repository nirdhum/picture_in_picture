const videoElement = document.getElementById('video')
const buttonPIP = document.getElementById('buttonPIP')
const buttonShare = document.getElementById('buttonShare')
const buttonStop = document.getElementById('buttonStop')

//Prompt to select media screen

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (err) {
        console.log(err);
    }
}

function stopCapture(evt) {
    let tracks = videoElement.srcObject.getTracks();

    tracks.forEach((track) => track.stop());
    videoElement.srcObject = null;
}

buttonShare.addEventListener('click', () => {
    selectMediaStream()
})

buttonPIP.addEventListener('click', () => {

    //Start PIP
    videoElement.requestPictureInPicture()

})

buttonStop.addEventListener('click', () => {
    stopCapture()
})