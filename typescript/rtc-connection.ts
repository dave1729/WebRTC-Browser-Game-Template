class RTCConnection {
  pc: RTCPeerConnection;
  dc: RTCDataChannel;

  public myOffer: string;
  public myAnswer: string;

  constructor() {
      this.pc = new RTCPeerConnection(undefined);
      this.dc = this.pc.createDataChannel("chat");
      this.myOffer = "";
      this.myAnswer = "";
  }

  createOffer() {
    var that = this;
    var offer = "";
    this.pc.onicecandidate = function(e) {
      if (e.candidate) return;
      that.myOffer = JSON.stringify(that.pc.localDescription);

      var gameIdElement = document.getElementById("creater-sdp");
      if(gameIdElement !== null) {
          gameIdElement.innerText = that.myOffer;
      }
    }
    this.pc.createOffer().then(function(e) {
        that.pc.setLocalDescription(e)
    });
    this.dc.onopen = function(){        
      console.log("CONNECTED!");
    };
    this.dc.onmessage = function(e) {
      if (e.data) {
        console.log("Message Recieved: " + e.data);
      }
    }
  }

  createAnswer(offer: string) {
    var that = this;
    var offerObject = JSON.parse(offer.replace(/\s/g, ""));
    var offerDesc = new RTCSessionDescription(offerObject);
    this.pc.setRemoteDescription(offerDesc);
    var setAnswer = function (answerDesc: RTCLocalSessionDescriptionInit | undefined) {
      that.pc.setLocalDescription(answerDesc);
    };
    var options = { optional: [{RtpDataChannels: true}]  }
    this.pc.createAnswer(options).then(setAnswer);
    this.pc.onicecandidate = function(e) {
      if (e.candidate) return;
      that.myAnswer = JSON.stringify(that.pc.localDescription);
    };
  }

  recieveAnswer(answer: string) {
    var answerObject = JSON.parse(answer);
    // this is where it seems broken, why does this fail?
    var thing = answerObject as RTCSessionDescriptionInit;
    var answerDesc = new RTCSessionDescription(thing);
    this.pc.setRemoteDescription(answerDesc);
    this.dc.onmessage = function(e) {
      if (e.data) {
        console.log("Message Recieved: " + e.data);
      }
    }
  }
}
