import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();

  console.log(roomId);
  const userId = Date.now().toString();
  const username = "Shahzaib Khan";

  const meeting = async (element) => {
    const appID = 846351004;
    const serverSecret = "02fc6c52cba41536f7cf28a722f1808e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userId,
      username
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: document.getElementById("call-container"),

      sharedLinks: [
        {
          name: "Copy Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname,
        },
      ],

      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div
      className="myCallContainer"
      id="call-container"
      ref={meeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
