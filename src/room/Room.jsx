import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./room.scss";
const Room = () => {
  const { id } = useParams();
  const userId = Date.now().toString();
  const username = "Shahzaib Khan";

  const meeting = async (element) => {
    try {
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

      zc.joinRoom({
        container: document.getElementById("call-container"),

        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    } catch (error) {
      console.log(error);
    }
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
