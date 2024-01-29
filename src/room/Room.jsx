import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();
  const userId = Date.now().toString();
  const username = "Shahzaib Khan";
  const meeting = async (element) => {
    const appId = 846351004;
    const serverSecret = "02fc6c52cba41536f7cf28a722f1808e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      id,
      userId,
      username
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    console.log(kitToken);

    zc.joinRoom({
      container: element,

      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div
      className="myCallContainer"
      ref={meeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
